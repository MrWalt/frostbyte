const express = require("express");
const { getOrders, createOrder } = require("../controllers/orderController");

const router = express.Router();

router.route("/").get(getOrders).post(createOrder);

module.exports = router;
