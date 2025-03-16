const User = require("../models/userModel");
const Order = require("../models/orderModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/APIFeatures");
const constants = require("../utils/constants");

// Reused function for filtering the body only allowing some fields to be changed
function filterObj(object, ...fields) {
  const newObject = {};
  Object.keys(object).forEach((item) => {
    if (fields.includes(item)) newObject[item] = object[item];
  });

  return newObject;
}

const updateMe = catchAsync(async function (req, res, next) {
  if (req.body.password || req.body.passwordConfirm)
    return next(
      new AppError(
        "This route is not intended for password updates, please use /update-password"
      )
    );

  const filteredBody = filterObj(
    req.body,
    "name",
    "email",
    "address",
    "country",
    "city",
    "phone"
  );

  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

const getWishlist = catchAsync(async function (req, res) {
  const user = await User.findById(req.user.id).populate({
    path: "wishlist",
    populate: {
      path: "product",
      select: "title discount price image",
    },
  });

  res
    .status(200)
    .json({ status: "success", data: { wishlist: user.wishlist } });
});

const updateWishlist = catchAsync(async function (req, res, next) {
  const user = await User.findById(req.user.id);

  if (req.body.type === "add") {
    user.wishlist.push({ product: req.body.product });
  }

  if (req.body.type === "remove") {
    // Have to use unsafe != here because for some reason they are not the same types
    user.wishlist = user.wishlist.filter((item) => item.id != req.body.product);
  }

  await user.save({ validateBeforeSave: false });

  res.status(201).json({ status: "success", data: { user } });
});

const getMyOrders = catchAsync(async function (req, res, next) {
  const orders = await Order.find({ user: req.user.id })
    .sort("-dateOrdered")
    .skip((req.query.page - 1) * constants.ORDER_PAGE_SIZE)
    .limit(constants.ORDER_PAGE_SIZE);

  const countQuery = new APIFeatures(
    Order.find({ user: req.user.id }),
    req.query
  ).filter();
  const count = await countQuery.query.countDocuments();

  res.status(200).json({ status: "success", data: orders, count });
});

module.exports = { updateMe, updateWishlist, getWishlist, getMyOrders };
