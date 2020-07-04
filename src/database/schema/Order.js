const mongoose = require('mongoose')

let orderSchema = new mongoose.Schema({
  customer_id: {
    type: String
  },
  products: {
    type: Array
  },
  status: {
    type: String
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

module.exports = mongoose.model('Order', orderSchema)