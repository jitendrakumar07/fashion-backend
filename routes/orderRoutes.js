import express from 'express';
import Order from '../models/Order.js';
import { getOrdersByUser } from '../controllers/orderController.js';

const router = express.Router();

// ➕ Place Order
router.post('/', async (req, res) => {
  try {
    const orderData = {
      ...req.body,
      userId: req.body.shippingAddress?.email || 'unknown',
    };

    const newOrder = new Order(orderData);
    const saved = await newOrder.save();

    res.status(201).json({ message: 'Order placed', orderId: saved._id });
  } catch (err) {
    res.status(500).json({ message: 'Order failed', error: err.message });
  }
});

// 📄 Get Orders (all or by userId)
router.get('/', getOrdersByUser);

export default router;
