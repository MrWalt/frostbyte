const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product must have a title."],
    },
    price: {
      type: Number,
      required: [true, "Product must have a price"],
    },
    description: {
      type: String,
      required: [true, "Product must have a description"],
    },
    manufacturer: {
      type: String,
      required: [true, "Product must have a brand name."],
    },
    category: {
      type: String,
      required: [true, "Product must have a category."],
    },
    specifications: {
      type: [String],
      required: [true, "Product must have some specifications."],
    },
    warranty: {
      type: String,
      required: [true, "Product must have warranty length"],
    },
    stock: {
      type: Number,
      required: [true, "Product must have a stock count."],
    },
    image: {
      type: String,
      default: "default.jpg",
    },
    capacity: String,
    type: String,
    socket: String,
    speed: String,
    ddr: String,
    dateAdded: {
      type: Date,
      default: Date.now,
    },
    discount: {
      type: Number,
      default: 0,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

productSchema.virtual("discountedPrice").get(function () {
  return this.discount > 0
    ? (this.price - (this.price / 100) * this.discount).toFixed(2)
    : null;
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
