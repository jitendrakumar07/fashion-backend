import Order from '../models/Order.js';

export const getOrdersByUser = async (req, res) => {
  const userId = req.query.userId;

  if (!userId) {
    return res.status(400).json({ message: 'User ID (email) is required' });
  }

  try {
    const orders = await Order.find({ 'shippingAddress.email': userId }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch orders', error: err.message });
  }
};
