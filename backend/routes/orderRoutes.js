const express = require("express");
const {
  getOrders,
  createOrder,
  getOrder,
  getCheckoutSession,
  refundOrder,
} = require("../controllers/orderController");

const { getUserOrders } = require("../controllers/userController");

const { protect, restrictTo } = require("../controllers/authController");

const router = express.Router();

router.use(protect);

router.route("/").get(getOrders).post(createOrder);
router.route("/:id").get(getOrder).post(restrictTo("admin"), refundOrder);
router.route("/checkout-session/:id").get(getCheckoutSession);

router.route("/user/:id").get(restrictTo("admin"), getUserOrders);

module.exports = router;
