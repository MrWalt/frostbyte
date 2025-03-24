const express = require("express");
const { protect, restrictTo } = require("../controllers/authController");

const {
  updateMe,
  getWishlist,
  updateWishlist,
  getMyOrders,
  getUsers,
} = require("../controllers/userController");

const router = express.Router();

router.use(protect);

router.route("/").get(restrictTo("admin"), getUsers);

router.route("/update-me").patch(updateMe);

router.route("/wishlist").get(getWishlist).post(updateWishlist);

router.route("/my-orders").get(getMyOrders);

module.exports = router;
