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
  date_created: {
    type: Date,
    default: Date.now
  },
  last_updated: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Product', productSchema)