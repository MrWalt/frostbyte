const User = require("../models/userModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

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

module.exports = { updateMe };
