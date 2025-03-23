const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");

const errorHandler = require("./controllers/errorController");

const app = express();

app.use(
  express.json({
    limit: "10kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10kb",
  })
);

app.use(cookieParser());

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow only the frontend origin
    credentials: true, // Allow cookies and credentials
  })
);

app.use(morgan("dev"));
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/orders", orderRoutes);

app.use(errorHandler);

module.exports = app;
