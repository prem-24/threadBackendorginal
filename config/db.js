const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log("MongoDB URI:", process.env.MONGO_DB_URL);
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("DB CONNECTED");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
