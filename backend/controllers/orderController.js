const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const { getAll, createOne } = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

const getOrders = getAll(Order);
// const createOrder = createOne(Order);

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
            .join(" ")} is out of stock`
        );

      if (productStock.stock < item.quantity)
        throw new AppError(
          `Only ${productStock.stock} ${productStock.title
            .split(" ")
            .slice(0, 3)
            .join(" ")} left`
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
  console.log(order.items);
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

module.exports = { getOrders, createOrder };
