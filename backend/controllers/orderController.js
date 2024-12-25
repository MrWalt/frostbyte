const Order = require("../models/orderModel");
const { getAll, createOne } = require("./handlerFactory");

const getOrders = getAll(Order);
const createOrder = createOne(Order);

module.exports = { getOrders, createOrder };
