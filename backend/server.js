const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("DB connection successful");
});

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () =>
  console.log(`App running on port ${PORT}`)
);
