const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../models/userModel");

function signToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
}

function createAndSendToken(user, statusCode, res) {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: false,
  };

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
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
    const user = await User.findOne({ email })
      .select("+password")
      .populate("orders");

    if (!user || !(await user.correctPassword(password, user.password)))
      throw new Error("Incorrect Email or Password");

    createAndSendToken(user, 200, res);
  } catch (err) {
    res.status(401).json({ status: "error", message: err.message });
  }
}

function logout(req, res) {
  res.clearCookie("jwt");
  res.status(200).json({ status: "success" });
}

async function isLoggedIn(req, res) {
  try {
    let token;

    if (req.cookies.jwt) token = req.cookies.jwt;

    if (!token) throw new Error("You are not logged in!");

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) throw new Error("This user does not exist.");

    req.user = user;

    res.status(200).json({ status: "success", data: user });
  } catch (err) {
    res.status(401).json({ status: "error", message: err.message });
  }
}

module.exports = { signUp, login, isLoggedIn, logout };
