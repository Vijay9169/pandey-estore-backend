import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from './models/Product.js'; // 1. Model import kiya

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middlewares
app.use(cors());
app.use(express.json());

// 2. Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Pandey E-Store Backend Server is running perfectly!'
  });
});

// 3. REAL API ENDPOINT: MongoDB Atlas se saare products fetch karna
app.get('/api/products', async (req, res) => {
  try {
    // Database query: Collection ke saare documents fetch karo
    const products = await Product.find({});
    
    // Success response
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    // Error response agar query fail ho
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products from database',
      error: error.message
    });
  }
});

// MongoDB Atlas Connection & Server Startup
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB Atlas Connected Successfully!');
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB Connection Error:', err.message);
  });