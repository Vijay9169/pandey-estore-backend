import mongoose from 'mongoose';

// Product Schema Definition: Data format aur validation rules
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product Name Required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category Required'],
    },
    price: {
      type: Number,
      required: [true, 'Price Required'],
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    image: {
      type: String,
      required: [true, 'Image URL Required'],
    },
    badge: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // Auto adds createdAt and updatedAt fields
  }
);

// Model export: 'Product' collection banayega MongoDB me
const Product = mongoose.model('Product', productSchema);
export default Product;