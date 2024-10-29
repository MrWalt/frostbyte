const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Product = require("../models/productModel");

dotenv.config({ path: "./config.env" });

const productsData = JSON.parse(
  fs.readFileSync(`${__dirname}/products.json`, "utf-8")
);

const app = require("../app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log(`Database Connected Succesfully`));

async function deleteData() {
  try {
    await Product.deleteMany();
    console.log("Data Deleted Successfully");
    process.exit();
  } catch (err) {
    throw new Error("There was an error deleting the data");
  }
}

async function createData() {
  try {
    await Product.create(productsData);
    console.log("Data Uploaded Successfully");

    process.exit();
  } catch (error) {
    throw new Error("There was an error uploading the data");
  }
}

app.listen(3000, () => {
  `Listening on PORT 3000`;
});

if (process.argv[2] === "--upload") createData();
if (process.argv[2] === "--delete") deleteData();
