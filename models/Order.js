import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
   userId: { type: String, required: true }, // ← storing email here

    items: [
      {
        productId: String,
        name: String,
        price: Number,
        quantity: Number,
        size: String,
        image: String,
      },
    ],
    shippingAddress: {
      firstName: String,
      lastName: String,
      email: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String,
      phone: String,
    },
    paymentMethod: String,
    subtotal: Number,
    shippingFee: Number,
    totalAmount: Number,
    isDelivered: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Order', orderSchema);
