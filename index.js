// Imports
const express = require("express");
const cors = require("cors");
const path = require("path"); // Added path import
const connectDb = require("./config/db"); // Fixed typo
const userRoutes = require("./routes/User");
const commentRoutes = require("./routes/Comment");
const postRoutes = require("./routes/Post");
const authRoutes = require("./routes/Auth");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const port = process.env.PORT || 4000;
const app = express();

// Middlewares
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const Auth = (req, res, next) => {
  try {
    const token = req.get("Authorization").split("Bearer ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.username) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.sendStatus(401);
  }
};

app.use(cors());
app.use(express.json({ limit: "10mb" })); // Adjust the limit as needed
app.use(express.urlencoded({ limit: "10mb", extended: true })); // Adjust the limit as needed

// Routes
app.get("/", (req, res) => {
  res.json({ message: "API is Working" });
});

app.use("/users", Auth, userRoutes);
app.use("/comments", Auth, commentRoutes);
app.use("/posts", Auth, postRoutes);
app.use("/auth", authRoutes);

// DB Connection
connectDb().catch((error) => console.log(error));

// Server Listening
app.listen(port, () => {
  console.log(`Server Listening at PORT ${port}`);
});
