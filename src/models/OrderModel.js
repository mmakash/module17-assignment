const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1, // Ensures the quantity is a positive integer.
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
    min: 0, // Ensures the totalAmount is a positive value.
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'Pending',
  },
},
{
  timestamps: true,
  versionKey: false,
},
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
