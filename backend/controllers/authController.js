const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

function signToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
}

function createAndSendToken(user, statusCode, res) {
  const token = signToken(user._id);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: { user },
  });
}

async function signUp(req, res) {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({ status: "success", data: newUser });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "There was an error signing up.",
      err,
    });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      throw new Error("Email and Password are required.");

    // Checking if user exits and pass is correct
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password)))
      throw new Error("Incorrect Email or Password.");

    createAndSendToken(user, 200, res);
  } catch (err) {
    res.status(400).json({ status: "error", message: err });
  }
}

module.exports = { signUp, login };
