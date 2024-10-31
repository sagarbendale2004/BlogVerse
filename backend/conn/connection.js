import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.URI;

const conn = async () => {
  try {
    await mongoose.connect(URI); // No need for additional options
    console.log("Connected to the database...");
  } catch (error) {
    console.log("Error in connection.js:", error);
  }
};

conn();
