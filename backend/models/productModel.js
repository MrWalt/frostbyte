const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product must have a title."],
      unique: [true, "A product with this title already exists."],
    },
    price: {
      EUR: {
        type: Number,
        required: [true, "Product must have a price in EUR"],
      },
      USD: {
        type: Number,
        required: [true, "Product must have a price in USD"],
      },
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
    discount: Number,
    sold: {
      type: Number,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
