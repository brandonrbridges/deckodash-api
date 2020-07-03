const mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
  name: {
    type: String
  },
  sku: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  sale_price: {
    type: String
  },
  dimensions: {
    height: Number,
    width: Number,
    depth: Number
  },
  category_id: {
    type: String
  }
})

module.exports = mongoose.model('Product', productSchema)