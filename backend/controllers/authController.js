const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../models/userModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

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

const signUp = catchAsync(async function (req, res, next) {
  const newUser = await User.create(req.body);

  createAndSendToken(newUser, 201, res);
});

const login = catchAsync(async function (req, res, next) {
  const { email, password } = req.body;

  if (!email || !password)
    next(new AppError("Email and Password are required", 401));

  // Checking if user exits and pass is correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password)))
    next(new AppError("Incorrect Email or Password", 401));

  createAndSendToken(user, 200, res);
});

const updatePassword = catchAsync(async function (req, res, next) {
  const user = await User.findById(req.user.id).select("+password");

  const { password, passwordNew, passwordConfirm } = req.body;

  if (!password || !(await user.correctPassword(password, user.password)))
    next(new AppError("Incorrect current password", 401));

  user.password = passwordNew;
  user.passwordConfirm = passwordConfirm;
  // Cant call User.findByIdAndUpdate as it will not trigger save middleware or run validation
  await user.save();

  createAndSendToken(user, 201, res);
});

function logout(req, res) {
  res.clearCookie("jwt");
  res.status(200).json({ status: "success" });
}

const isLoggedIn = catchAsync(async function (req, res, next) {
  let token;

  if (req.cookies.jwt) token = req.cookies.jwt;

  if (!token) next(new AppError("No previous login saved", 401));

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);
  if (!user)
    next(new AppError("This user belonging to this token does not exist", 401));

  req.user = user;

  res.status(200).json({ status: "success", data: { user } });
});

const protect = catchAsync(async function (req, res, next) {
  let token;

  if (req.cookies.jwt) token = req.cookies.jwt;

  if (!token) next(new AppError("You must be logged in to do that", 401));

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);
  if (!user)
    return next(
      new AppError("The user belonging to this token no longer exits", 401)
    );

  // if (user.changedPasswordAfterToken(decoded.iat))
  //   return next(
  //     new AppError("Password was recently changed. Please log in again", 401)
  //   );

  req.user = user;

  next();
});

const restrictTo = function (...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(new AppError("You do not have persmisson to do this", 403));
    next();
  };
};

module.exports = {
  signUp,
  login,
  isLoggedIn,
  logout,
  protect,
  restrictTo,
  updatePassword,
};
