const dotenv = require("dotenv");
const { Post } = require("../models/Post.js");
const postData = require("./index.js");
const connectDb = require("../config/db.js");
const path = require("path");

// Load .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// console.log("Environment Variables:", process.env);

connectDb();

const importData = async () => {
    try {
        await Post.deleteMany();
        await Post.insertMany(postData);
        console.log("DATA IMPORTED");
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Post.deleteMany();
        console.log("Data Destroyed");
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

console.log(process.argv);

if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}

console.log(process.argv);
