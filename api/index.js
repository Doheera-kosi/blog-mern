const express = require('express');
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRoutes from "./routes/user.route.js";
// import authRoutes from "./routes/auth.route.js";
// import postRoutes from "./routes/post.route.js";
// import commentRoutes from "./routes/comment.route.js";
// import cookieParser from "cookie-parser";
// import path from "path";

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.route.js");
const authRoutes = require("./routes/auth.route.js");
const postRoutes = require("./routes/post.route.js");
const commentRoutes = require("./routes/comment.route.js");
const cookieParser = require("cookie-parser");
const path = require("path");


dotenv.config();

const app = express(); // Define app before using it
app.use(express.json());
app.use(cookieParser());
const __dirname = path.resolve();

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      // Use PORT variable here
      console.log(`Server is running on port: ${PORT}`);
    });
    console.log("MongoDB Connected Successfully!");
  })
  .catch((err) => {
    console.error(`MongoDB connection failed: ${err}`);
  });


//  API TEST ROUTES
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use(express.static(path.join(__dirname, "../client/dist")));


app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

// MIDDLE WARE TO HANDLE ERROR
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
