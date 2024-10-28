const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/products", productRoutes);

module.exports = app;
