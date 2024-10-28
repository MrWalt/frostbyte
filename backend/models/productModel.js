const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product must have a name."],
  },
  priceUSD: {
    type: String,
    required: [true, "Product must have a price in USD"],
  },
  priceEUR: {
    type: String,
    required: [true, "Product must have a price in EUR"],
  },
  brand: {
    type: String,
    required: [true, "Product must have a brand name"],
  },
  category: {
    type: String,
    required: [true, "Product must have a category"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
