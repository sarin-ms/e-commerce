import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: string,
    description: string,
    price: number,
    image: string,
    category: string,
    stock: number,
}, { timestamps: true });