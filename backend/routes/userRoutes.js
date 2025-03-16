const express = require("express");
const { protect } = require("../controllers/authController");

const {
  updateMe,
  getWishlist,
  updateWishlist,
  getMyOrders,
} = require("../controllers/userController");

const router = express.Router();

router.use(protect);

router.route("/update-me").patch(updateMe);

router.route("/wishlist").get(getWishlist).post(updateWishlist);

router.route("/my-orders").get(getMyOrders);

module.exports = router;
