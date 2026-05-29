import { OpenRouter } from "@openrouter/sdk";
import ConnectDB from "@/lib/connectDB";
import Product from "@/models/Product";

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req) {
  const query = await req.json();

  const aiRes = await openrouter.chat.complete({
    model: "openrouter/owl-alpha",
    messages: [
      {
        role: "user",
        content: "Convert this into a short product keyword" + query,
      },
    ],
  });

  const keyword = aiRes.choices[0].message.content.trim();

  await ConnectDB();  

  const products = await Product.find({
    title: { $regex: keyword    , $options: "i" },
  });

  return Response.json(products);
}
