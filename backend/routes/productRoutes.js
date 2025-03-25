const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
  resizeImage,
} = require("../controllers/productController");

const { protect, restrictTo } = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(getAllProducts)
  .post(protect, restrictTo("admin"), uploadImage, resizeImage, createProduct);

router
  .route("/:id")
  .get(getProduct)
  .patch(protect, restrictTo("admin"), uploadImage, resizeImage, updateProduct)
  .delete(protect, restrictTo("admin"), deleteProduct);

module.exports = router;
