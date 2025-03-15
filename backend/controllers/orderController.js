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
    next(new AppError("Outdated product, please refresh and try again", 400));
  }

  const { items } = order;

  const productsPromise = items.map(
    async (item) =>
      await Product.findById(item.item.id).select(
        "id discount image warranty title price"
      )
  );

  const products = await Promise.all(productsPromise);

  order.items = items.map((item) => {
    return {
      item: products.find((product) => product.id == item.item.id),
      quantity: item.quantity,
    };
  });

  order.isValidated = true;

  const newOrder = await order.save();

  //   const newOrder = await Order.findByIdAndUpdate(order.id, order, {
  //     new: true,
  //     runValidators: true,
  //   });
  //   const newOrder = await Order.findByIdAndUpdate(order.id, order, {
  //     new: true,
  //     runValidators: true,
  //   });

  res.status(201).json({ status: "success", data: { order: newOrder } });
});

module.exports = { getOrders, createOrder };
