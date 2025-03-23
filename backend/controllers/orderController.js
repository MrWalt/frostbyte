const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const { getAll, createOne, getOne } = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const getOrders = getAll(Order);

// THIS IS INCOMPLETE ADD WEBHOOKS LATER! USERS STILL GET A VALID ORDER EVEN IF THEY CANCEL
const getCheckoutSession = catchAsync(async function (req, res, next) {
  const order = await Order.findById(req.params.id);

  const line_items = [
    ...order.items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "eur",
        unit_amount: (item.item?.discount
          ? item.item.discountedPrice * 100
          : item.item.price * 100
        ).toFixed(0),
        product_data: {
          name: item.item.title,
        },
      },
    })),
  ];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    success_url: `${req.get("origin")}/thank-you?id=${order.id}`,
    cancel_url: `${req.get("origin")}/products`,
    customer_email: req.user.email,
    client_reference_id: order.id,
    mode: "payment",
    line_items,
  });

  res.status(200).json({ status: "success", session });
});

const createOrder = catchAsync(async function (req, res, next) {
  const order = await Order.create({ ...req.body, user: req.user.id });

  // Check to see if the products purchased havent been tampered with or changed by an admin
  if (!(await order.validateProducts(order.items))) {
    Order.findByIdAndDelete(order.id);
    return next(
      new AppError("Outdated product, please refresh and try again", 400)
    );
  }

  const { items } = order;

  const productsPromise = items.map(
    async (item) =>
      await Product.findById(item.item.id).select(
        "id discount image warranty title price stock"
      )
  );

  const products = await Promise.all(productsPromise);

  try {
    order.items = items.map((item) => {
      const productStock = products.find(
        (product) => product.id == item.item.id
      );

      if (productStock.stock === 0)
        throw new AppError(
          `${productStock.title
            .split(" ")
            .slice(0, 3)
            .join(" ")} is out of stock`,
          400
        );

      if (productStock.stock < item.quantity)
        throw new AppError(
          `Only ${productStock.stock} ${productStock.title
            .split(" ")
            .slice(0, 3)
            .join(" ")} left`,
          400
        );

      return {
        item: products
          .find((product) => product.id == item.item.id)
          .toObject({ virtuals: true }),
        quantity: item.quantity,
      };
    });
  } catch (err) {
    await Order.findByIdAndDelete(order.id);
    return next(err);
  }

  order.isValidated = true;

  // This is the code needed to change the stock of the bought products
  products.map(
    async (product) =>
      await Product.findByIdAndUpdate(product.id, {
        stock:
          product.stock -
          order.items.find((item) => item.item.id == product.id).quantity,
      })
  );

  const newOrder = await order.save();

  res.status(201).json({ status: "success", data: { order: newOrder } });
});

const getOrder = catchAsync(async function (req, res, next) {
  const order = await Order.findById(req.params.id);
  if (!order) return next(new AppError("Could not find this order", 404));

  order.updateStatus(order);

  res.status(200).json({ status: "success", data: order });
});

// const getOrder = getOne(Order);

module.exports = { getOrders, createOrder, getOrder, getCheckoutSession };
