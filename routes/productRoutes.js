import express from 'express';
import upload from '../middlewares/upload.js'; // ✅ Correct import
import {
  createProduct,
  getAllProducts,
  getProductById,
} from '../controllers/productController.js';

const router = express.Router();

router.post('/', upload.array('images', 4), createProduct); // ✅ Image upload middleware
router.get('/', getAllProducts);
router.get('/:id', getProductById);

export default router;
