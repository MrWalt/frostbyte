const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product must have a name."],
      unique: [true, "A product with this name already exists."],
    },
    priceUSD: {
      type: Number,
      required: [true, "Product must have a price in USD."],
    },
    priceEUR: {
      type: Number,
      required: [true, "Product must have a price in EUR."],
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
    sold: {
      type: Number,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
