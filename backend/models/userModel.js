const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "You must provide an email address."],
      unique: true,
      lowercase: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "support"],
      default: "user",
    },
    address: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    phone: {
      type: Number,
    },
    password: {
      type: String,
      select: false,
      minlength: [8, "Password must be longer than 8 characters."],
    },
    passwordConfirm: {
      type: String,
      required: [true, "You must confirm your password."],
      validate: {
        validator: function (value) {
          return this.password === value;
        },
        message: "Passwords must match.",
      },
    },
    orders: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Order",
      },
    ],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 14);
  this.passwordConfirm = undefined;

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassowrd,
  userPassword
) {
  return await bcrypt.compare(candidatePassowrd, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
