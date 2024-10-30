const Product = require("../models/productModel");
const {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne,
} = require("./handlerFactory");

// READ
const getAllProducts = getAll(Product);
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
