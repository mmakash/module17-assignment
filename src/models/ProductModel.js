const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    // This field is optional, so no 'required' property is set.
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Ensures the price is a positive value.
  },
  stock: {
    type: Number,
    required: true,
    min: 0, // Ensures the stock is a non-negative integer.
  },
  category: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    // This field is optional, so no 'required' property is set.
  },
},
{timestamps: true, versionKey: false}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
