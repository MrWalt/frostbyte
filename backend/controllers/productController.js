const Product = require("../models/productModel");
const { getAll } = require("./handlerFactory");

const getAllProducts = getAll(Product);

// async function getAllProducts(req, res) {
//   const products = await Product.find();

//   res.status(200).json({
//     status: "success",
//     data: { products },
//   });
// }

async function createProduct(req, res) {
  const newProduct = await Product.create(req.body);

  res.status(201).json({
    status: "succes",
    data: { product: newProduct },
  });
}

module.exports = { getAllProducts, createProduct };
