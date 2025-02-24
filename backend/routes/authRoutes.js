const express = require("express");
const {
  signUp,
  login,
  isLoggedIn,
  logout,
  updatePassword,
  protect,
} = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/is-logged-in").get(isLoggedIn);
router.route("/update-password").post(protect, updatePassword);

module.exports = router;
