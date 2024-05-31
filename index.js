// Imports
const express = require("express");
const cors = require("cors");
const conectDb = require("./config/db");
const userRoutes = require("./routes/User");
const commentRoutes = require("./routes/Comment");
const postRoutes = require("./routes/Post");
const authRoutes = require("./routes/Auth");
const jwt = require("jsonwebtoken");
// const path = require("path")
require("dotenv").config();
const port = process.env.PORT || 4000;
const app = express();
// Middlewares

const Auth = (req, res, next) => {
  try {
    const token = req.get("Authorization").split("Bearer ")[1];

    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.username) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.sendStatus(401);
  }
};
// app.use(express.static("build"));

app.use(cors());
app.use(express.json({ limit: "10mb" })); // Adjust the limit as needed
app.use(express.urlencoded({ limit: "10mb", extended: true })); // Adjust the limit as needed

// Rooutes
app.get("/", (req, res) => {
  res.json({ message: "API is Working" });
});

app.use("/users", Auth, userRoutes);
app.use("/comments", Auth, commentRoutes);
app.use("/posts", Auth, postRoutes);
app.use("/auth", authRoutes);

// DB Connection
conectDb().catch((error) => console.log(error));

//  async function main() {
//   try {
//     await mongoose.connect(process.env.MONGO_DB_URL);
//     console.log("DB Connected");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// }

// Server Listening
app.listen(port, () => {
  console.log(`Server Listening at PORT ${process.env.PORT}`);
});
