const mongoose = require("mongoose");
const Product = require("./productModel");

const orderSchema = new mongoose.Schema(
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
    // Embedding this
    items: Array,
    shipTo: {
      type: String,
      required: [true, "Order must have a shipping address"],
    },
    isValidated: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

orderSchema.methods.validateProducts = async function (products) {
  const productsPromise = products.map(async (item) =>
    Product.findById(item.item.id).select("id price stock discount")
  );

  const fetchedProducts = await Promise.all(productsPromise);

  const invalidProducts = fetchedProducts.reduce((acc, product) => {
    const productToCompare = products.find(
      (item) => product.id == item.item.id
    );

    if (
      productToCompare.item.price === product.price &&
      productToCompare.item.stock === product.stock &&
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

// Calculating the total price
orderSchema.pre("save", function (next) {
  if (this.isValidated) {
    this.virtuals;
  }

  next();
});

orderSchema.virtual("totalPrice").get(function () {
  if (this.isValidated) {
    const totalPrice = this.items.reduce((acc, cur) => {
      return (acc +=
        cur.item.discountedPrice !== null
          ? cur.item.discountedPrice * cur.quantity
          : cur.item.price * cur.quantity);
    }, 0);

    return (this.totalPrice = totalPrice);
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
