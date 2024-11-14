const Product = require("../models/productModel");
const {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne,
} = require("./handlerFactory");

// READ
const getAllProducts = getAll(
  Product,
  "-sold -specifications -warranty -description -__v",
  true
);

const getProduct = getOne(Product);

// CREATE
const createProduct = createOne(Product);

// UPDATE
const updateProduct = updateOne(Product);

// DELETE
const deleteProduct = deleteOne(Product);

module.exports = {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
