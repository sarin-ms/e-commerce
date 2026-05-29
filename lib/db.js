import mongoose from "mongoose";

export const connectDB = async () => {
  if(mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(process.env.MONGO_URI);

  console.log("Connected to MongoDB");

};

export default mongoose.models.Product || mongoose.model("Product", productSchema);