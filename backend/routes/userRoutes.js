const express = require("express");
const { protect } = require("../controllers/authController");

const {
  updateMe,
  getWishlist,
  updateWishlist,
} = require("../controllers/userController");

const router = express.Router();

router.use(protect);

router.route("/update-me").patch(updateMe);

router.route("/wishlist").get(getWishlist).post(updateWishlist);

module.exports = router;
