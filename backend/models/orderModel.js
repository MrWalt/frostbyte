const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    dateOrdered: {
      type: Date,
      default: Date.now,
    },
    status: { type: String, default: "Pending" },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "An order must belong to a user"],
    },
    orderedItems: [
      {
        item: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          required: [true, "An order must have an item"],
        },
        quantity: {
          type: Number,
          required: [true, "An order must have a quantity"],
          default: 1,
        },
      },
    ],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

OrderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name email",
  }).populate({
    path: "orderedItems",
    populate: {
      path: "item",
      select: "-specifications -stock -sold -category",
    },
  });

  next();
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
