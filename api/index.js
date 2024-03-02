import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express(); // Define app before using it

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => { // Use PORT variable here
      console.log(`Server is running on port: ${PORT}`);
    });
    console.log("MongoDB Connected Successfully!");
  })
  .catch((err) => {
    console.error(`MongoDB connection failed: ${err}`);
  });
