import mongoose from "mongoose";
import productSchema from "../models/products.js";

export const connectDB = async () => {
  if(mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(process.env.MONGO_URI);

  console.log("Connected to MongoDB");

};

export default connectDB;