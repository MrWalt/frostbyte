const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const { getAll, createOne } = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

const getOrders = getAll(Order);
// const createOrder = createOne(Order);

const createOrder = catchAsync(async function (req, res, next) {
  const order = await Order.create(req.body);

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
          `${
            productStock.title.length > 16
              ? productStock.title.slice(0, 16) + "..."
              : productStock.title
          } is out of stock`,
          400
        );

      if (productStock.stock < item.quantity)
        throw new AppError(
          `Only ${productStock.stock} ${
            productStock.title.length > 16
              ? productStock.title.slice(0, 16) + "..."
              : productStock.title
          } left`,
          400
        );

      return {
        item: products.find((product) => product.id == item.item.id),
        quantity: item.quantity,
      };
    });
  } catch (err) {
    return next(err);
  }

  order.isValidated = true;

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
