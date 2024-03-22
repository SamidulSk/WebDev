import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  // mini model to track order -> total order
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  Quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    orderItems: {
      // multimple order
      type: [orderItemSchema],
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    status: {
      type: String, // choose
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'], //choose
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
