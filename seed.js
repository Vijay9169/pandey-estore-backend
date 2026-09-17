import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

// Hamare existing 14 products ka catalog
const INITIAL_PRODUCTS = [
  {
    name: "Wireless Noise-Canceling Headphones",
    category: "Electronics",
    price: 199.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    badge: "Bestseller",
  },
  {
    name: "Minimalist Mechanical Keyboard",
    category: "Accessories",
    price: 89.5,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
  },
  {
    name: "Smart Fitness Watch",
    category: "Wearables",
    price: 149.0,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    badge: "Sale",
  },
  {
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 279.0,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80",
  },
  {
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 59.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
  },
  {
    name: "Modern Desk Lamp",
    category: "Lighting",
    price: 45.0,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
  },
  {
    name: "Water-Resistant Backpack",
    category: "Travel",
    price: 79.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    badge: "Popular",
  },
  {
    name: "Insulated Water Bottle",
    category: "Sports",
    price: 24.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
  },
  {
    name: "Classic Leather Sneakers",
    category: "Footwear",
    price: 119.0,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
    badge: "New",
  },
  {
    name: "Polarized Sunglasses",
    category: "Fashion",
    price: 65.0,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
  },
  {
    name: "Ceramic Coffee Mug Set",
    category: "Kitchen",
    price: 34.5,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80",
  },
  {
    name: "Stainless Steel Electric Kettle",
    category: "Home Appliances",
    price: 49.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80",
  },
  {
    name: "Aromatherapy Scented Candle",
    category: "Decor",
    price: 18.0,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&q=80",
  },
  {
    name: "Organic Aloe Vera Face Mist",
    category: "Beauty",
    price: 22.0,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80",
    badge: "Organic",
  }
];

// Seed function: Database saaf karke 14 fresh items insert karega
const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected for seeding...");

    // Purana data saaf karo taaki duplicate na bane
    await Product.deleteMany();
    console.log("Old products cleared.");

    // 14 products ko ek sath MongoDB Atlas me insert karo
    await Product.insertMany(INITIAL_PRODUCTS);
    console.log(" 14 Products Seeded Successfully into MongoDB Atlas!");

    process.exit();
  } catch (error) {
    console.error(" Error with data seeding:", error.message);
    process.exit(1);
  }
};

importData();