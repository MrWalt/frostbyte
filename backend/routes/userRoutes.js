const express = require("express");
const { protect } = require("../controllers/authController");

const { updateMe } = require("../controllers/userController");

const router = express.Router();

router.use(protect);

router.route("/update-me").patch(updateMe);

module.exports = router;
