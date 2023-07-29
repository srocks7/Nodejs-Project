const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
  description: {
    type: String,
    required: [true, "A product must have a description"],
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  quantity: {
    type: Number,
    required: [true, "A product must have a quantity"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
