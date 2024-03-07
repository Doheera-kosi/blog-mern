import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js"
import cookieParser from "cookie-parser";

dotenv.config();

const app = express(); // Define app before using it
app.use(express.json());
app.use(cookieParser())

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
app.use("/api/post", postRoutes)

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
