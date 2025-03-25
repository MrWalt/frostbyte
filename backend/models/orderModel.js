const mongoose = require("mongoose");
const Product = require("./productModel");
const datefns = require("date-fns");

const orderSchema = new mongoose.Schema(
  {
    dateOrdered: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      default: "Pending",
      enum: [
        "Pending",
        "Processing",
        "Shipped",
        "OutForDelivery",
        "Delivered",
        "Refunded",
      ],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "An order must belong to a user"],
    },
    isGift: {
      type: Boolean,
      default: false,
      enum: [true, false],
    },
    isRefunded: {
      type: Boolean,
      default: false,
      enum: [true, false],
    },
    name: {
      type: String,
      required: [true, "Order must have a persons name"],
    },
    // Embedding this
    items: {
      type: Array,
      validate: {
        validator: function (array) {
          return array.length;
        },
        message: "Order cannot be empty",
      },
    },
    shipTo: {
      type: String,
      required: [true, "Order must have a shipping address"],
    },
    isValidated: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
    isPaid: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
    expectedArrival: {
      type: Date,
      default: () => Date.now() + 1036800000,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Validate to make sure the products are not tampered with
orderSchema.methods.validateProducts = async function (products) {
  const productsPromise = products.map(async (item) =>
    Product.findById(item.item.id).select("id price discount")
  );

  const fetchedProducts = await Promise.all(productsPromise);

  const invalidProducts = fetchedProducts.reduce((acc, product) => {
    const productToCompare = products.find(
      (item) => product.id == item.item.id
    );

    if (
      productToCompare.item.price === product.price &&
      productToCompare.item.discount === product.discount
    )
      return acc;

    return acc + 1;
  }, 0)
    ? true
    : false;

  if (invalidProducts) return 0;

  return 1;
};

// Changing the status based on time passed
// Will change these hardcoded values later. For demo purposes only
orderSchema.methods.updateStatus = async function (order) {
  if (order.status === "Refunded") return order;

  if (
    datefns.getUnixTime(Date.now()) >
    datefns.getUnixTime(order.dateOrdered) + 512000
  ) {
    order.status = "Delivered";
    await order.save();
    return order;
  }

  if (
    datefns.getUnixTime(Date.now()) >
    datefns.getUnixTime(order.dateOrdered) + 432000
  ) {
    order.status = "OutForDelivery";
    await order.save();
    return order;
  }

  if (
    datefns.getUnixTime(Date.now()) >
    datefns.getUnixTime(order.dateOrdered) + 7200
  ) {
    order.status = "Shipped";
    await order.save();
    return order;
  }

  if (
    datefns.getUnixTime(Date.now()) >
    datefns.getUnixTime(order.dateOrdered) + 3600
  ) {
    order.status = "Processing";
    await order.save();
    return order;
  }
};

// Calculating the total price as a virtual field
orderSchema.virtual("totalPrice").get(function () {
  if (this.isValidated) {
    const totalPrice = this.items.reduce((acc, cur) => {
      return (acc +=
        cur.item.discount !== 0
          ? cur.item.discountedPrice * cur.quantity
          : cur.item.price * cur.quantity);
    }, 0);

    return (this.totalPrice = totalPrice);
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
