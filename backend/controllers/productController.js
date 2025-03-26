const Product = require("../models/productModel");
const {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne,
} = require("./handlerFactory");
const multer = require("multer");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const sharp = require("sharp");

// READ
const getAllProducts = getAll(
  Product,
  "-sold -specifications -warranty -description -__v",
  true
);

const getProduct = getOne(Product);

// CREATE
const createProduct = catchAsync(async function (req, res, next) {
  const newProduct = await Product.create(req.body);

  if (req.file !== undefined) {
    newProduct.image = req.file.filename;
    await newProduct.save();
  }

  res.status(201).json({ status: "success", data: { newProduct } });
});

// UPDATE
const updateProduct = catchAsync(async function (req, res, next) {
  console.log(req.body);
  if (req.file !== undefined) {
    req.body.image = req.file.filename;
  } else delete req.body.image;

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  res.status(201).json({ status: "success", data: { updatedProduct } });
});

// DELETE
const deleteProduct = deleteOne(Product);

// This is for image uploads
const multerStorage = multer.memoryStorage();

const multerFilter = function (req, file, callBack) {
  if (file.mimetype.startsWith("image")) callBack(null, true);
  else callBack(new AppError("Not an image. Please only upload images", 400));
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

const uploadImage = upload.single("image");

const resizeImage = catchAsync(async function (req, res, next) {
  if (req.file === undefined) return next();

  req.file.filename = `product-${
    Date.now() * (Math.random() * 10 + 1).toFixed(0)
  }.webp`;

  await sharp(req.file.buffer)
    .resize(900, 900, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .webp({ quality: 80 })
    .toFile(`public/img/${req.file.filename}`);

  next();
});

module.exports = {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
  resizeImage,
};
