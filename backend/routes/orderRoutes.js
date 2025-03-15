const express = require("express");
const { getOrders, createOrder } = require("../controllers/orderController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router.use(protect);

router.route("/").get(getOrders).post(createOrder);

module.exports = router;
