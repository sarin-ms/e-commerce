import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
    category: String,
    stock: Number,
});

export default mongoose.models.Product || mongoose.model("Product", productSchema);