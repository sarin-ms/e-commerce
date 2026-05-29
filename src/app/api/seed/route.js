import connectDB from "../../../lib/db.js";
import Product from "../../../models/products.js";

export async function GET() {
    await connectDB();
    const products = await Product.find();
    await Product.deleteMany();

    await Product.insertMany([
        {
            title: "Portgual Away Jersey 2026",
            description: "The Portugal Away Jersey 2026 is a stylish and comfortable football shirt designed for fans of the Portuguese national team. Made from high-quality materials, this jersey features a sleek design with the iconic red and green colors of Portugal. It is perfect for showing your support during matches or as casual wear.",
            price: 379.99,
            image: "https://i.postimg.cc/QKcbQNWx/Portugal-2026-Men-s-Football-Authentic-Away-Jersey.avif",
            category: "jersey",
            stock: 100,
        },
        {
            title: "Nike Air Max 90",
            description: "The Nike Air Max 90 is a classic sneaker that combines style and comfort. Featuring a timeless design with a visible Air cushioning unit in the sole, these shoes provide excellent support and cushioning for all-day wear. The durable materials and iconic silhouette make the Nike Air Max 90 a must-have for sneaker enthusiasts.",
            price: 129.99,
            image: "https://i.postimg.cc/kG6yKwCj/5324c8e-Nike-CD6864-133-1.avif",
            category: "sneakers",
            stock: 79,
        },
        {
            title: "FC Barcelona Home Jersey 2026",
            description: "The FC Barcelona Home Jersey 2026 features the club's iconic blue and garnet stripes with a modern design. Crafted from lightweight, breathable fabric, it ensures maximum comfort on and off the pitch. Perfect for passionate Barça fans looking to support their team in style.",
            price: 399.99,
            image: "https://i.postimg.cc/example/barcelona-home-2026.avif",
            category: "jersey",
            stock: 85,
        },
        {
            title: "Real Madrid Away Jersey 2026",
            description: "The Real Madrid Away Jersey 2026 combines elegance and performance with a sleek contemporary design. Made from moisture-wicking fabric, it helps keep you cool and comfortable during intense matches or everyday wear.",
            price: 389.99,
            image: "https://i.postimg.cc/example/realmadrid-away-2026.avif",
            category: "jersey",
            stock: 92,
        },
        {
            title: "Manchester City Home Jersey 2026",
            description: "Show your support for Manchester City with the Home Jersey 2026. Featuring the club's signature sky-blue color and premium construction, this jersey delivers both style and performance for dedicated fans.",
            price: 374.99,
            image: "https://i.postimg.cc/example/mancity-home-2026.avif",
            category: "jersey",
            stock: 110,
        },
        {
            title: "Argentina Home Jersey 2026",
            description: "The Argentina Home Jersey 2026 celebrates football excellence with the country's iconic white and sky-blue stripes. Lightweight and breathable, it offers exceptional comfort for match days and casual outings alike.",
            price: 384.99,
            image: "https://i.postimg.cc/example/argentina-home-2026.avif",
            category: "jersey",
            stock: 95,
        },
        {
            title: "Brazil Away Jersey 2026",
            description: "The Brazil Away Jersey 2026 showcases a vibrant design inspired by the nation's football heritage. Built with premium fabric technology, it ensures comfort and durability while representing one of football's most successful teams.",
            price: 394.99,
            image: "https://i.postimg.cc/example/brazil-away-2026.avif",
            category: "jersey",
            stock: 88,
        },
        {
            title: "Adidas Ultraboost 24",
            description: "The Adidas Ultraboost 24 delivers outstanding energy return and all-day comfort. Featuring a responsive Boost midsole and breathable knit upper, these sneakers are ideal for running, training, or casual wear.",
            price: 189.99,
            image: "https://i.postimg.cc/example/adidas-ultraboost-24.avif",
            category: "sneakers",
            stock: 67,
        },
        {
            title: "Nike Dunk Low Retro",
            description: "The Nike Dunk Low Retro combines vintage basketball style with modern comfort. Its durable leather construction and timeless silhouette make it a versatile choice for sneaker lovers and everyday wear.",
            price: 119.99,
            image: "https://i.postimg.cc/example/nike-dunk-low.avif",
            category: "sneakers",
            stock: 74,
        },
        {
            title: "Puma RS-X Heritage",
            description: "The Puma RS-X Heritage features a bold retro-inspired design with advanced cushioning technology. Perfect for making a statement, these sneakers provide comfort, support, and eye-catching style.",
            price: 109.99,
            image: "https://i.postimg.cc/example/puma-rsx-heritage.avif",
            category: "sneakers",
            stock: 81,
        },
        {
            title: "New Balance 550",
            description: "The New Balance 550 brings back a classic basketball-inspired look with premium materials and modern comfort. Its clean design and versatile style make it a staple for any sneaker collection.",
            price: 139.99,
            image: "https://i.postimg.cc/example/newbalance-550.avif",
            category: "sneakers",
            stock: 58,
        },
        {
            title: "Converse Chuck Taylor All Star",
            description: "A timeless icon, the Converse Chuck Taylor All Star offers classic style and everyday versatility. Its durable canvas upper and signature design have made it a favorite across generations.",
            price: 79.99,
            image: "https://i.postimg.cc/example/converse-chuck-taylor.avif",
            category: "sneakers",
            stock: 120,
        },
        {
            title: "Liverpool Home Jersey 2026",
            description: "The Liverpool Home Jersey 2026 proudly displays the club's legendary red colors with modern detailing. Engineered for comfort and performance, it is perfect for cheering on the Reds throughout the season.",
            price: 379.99,
            image: "https://i.postimg.cc/example/liverpool-home-2026.avif",
            category: "jersey",
            stock: 102,
        },
        {
            title: "Germany Home Jersey 2026",
            description: "The Germany Home Jersey 2026 features a refined design inspired by the nation's rich football history. Constructed with breathable performance fabric, it provides comfort while showcasing national pride.",
            price: 389.99,
            image: "https://i.postimg.cc/example/germany-home-2026.avif",
            category: "jersey",
            stock: 90,
        },
    ]);  

    return Response.json({ message: "Products seeded successfully" });
}