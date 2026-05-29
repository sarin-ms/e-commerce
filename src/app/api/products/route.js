import connectDB from "../../../lib/db.js";
import Product from "../../../models/products.js";

export async function GET() {
    await connectDB();
    const products = await Product.find();
    return Response.json(products);
}