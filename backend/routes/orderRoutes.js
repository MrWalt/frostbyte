const express = require("express");
const { getOrders, createOrder } = require("../controllers/orderController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router.route("/").get(getOrders).post(protect, createOrder);

module.exports = router;
