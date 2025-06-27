import Product from '../models/Product.js';

// ➕ Create Product
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, subCategory, popular } = req.body;
    let sizes = req.body.sizes || req.body['sizes[]'];
    if (!Array.isArray(sizes)) sizes = [sizes];

    if (!name || !price || !description || !category || sizes.length === 0 || !req.files?.length) {
      return res.status(400).json({ message: 'All fields including at least one image and sizes are required' });
    }

    const imageUrls = req.files.map((file) => file.path);
    const product = new Product({ name, price, description, category, subCategory, popular: popular === 'true', sizes, images: imageUrls });
    await product.save();

    res.status(201).json({ message: '✅ Product created', product });
  } catch (err) {
    console.error('🛠 createProduct error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// 📦 Get All Products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products', error: err.message });
  }
};

// 🔍 Get Single Product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product', error: err.message });
  }
};
