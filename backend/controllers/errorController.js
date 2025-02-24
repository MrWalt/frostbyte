const AppError = require("../utils/AppError");

function sendDevError(err, req, res) {
  console.error("Error: ", err);

  res.status(err.statusCode).json({
    status: err.status,
    err,
    message: err.message,
    stack: err.stack,
  });
}

function sendProdError(err, req, res) {
  if (err.isOperational)
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

  console.error("Error: ", err);

  res.status(500).json({
    status: "error",
    message: "Something went wrong on our end, sorry",
  });
}

module.exports = function (err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if ((process.env.NODE_ENV = "developlment")) {
    sendDevError(err, req, res);
    return;
  }

  sendProdError(err, req, res);
};
