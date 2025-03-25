const express = require("express");
const { protect, restrictTo } = require("../controllers/authController");

const {
  updateMe,
  getWishlist,
  updateWishlist,
  getMyOrders,
  getUsers,
  getUser,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.use(protect);

router.route("/update-me").patch(updateMe);

router.route("/wishlist").get(getWishlist).post(updateWishlist);

router.route("/my-orders").get(getMyOrders);

router.route("/").get(restrictTo("admin"), getUsers);
router
  .route("/:id")
  .get(restrictTo("admin"), getUser)
  .post(restrictTo("admin"), updateUser);

module.exports = router;
