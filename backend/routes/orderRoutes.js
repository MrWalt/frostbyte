const express = require("express");
const {
  getOrders,
  createOrder,
  getOrder,
} = require("../controllers/orderController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router.use(protect);

router.route("/").get(getOrders).post(createOrder);
router.route("/:id").get(getOrder);

module.exports = router;
