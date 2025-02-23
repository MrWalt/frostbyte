const express = require("express");
const {
  signUp,
  login,
  isLoggedIn,
  logout,
} = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/is-logged-in").get(isLoggedIn);

module.exports = router;
