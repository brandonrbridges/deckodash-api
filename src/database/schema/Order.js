const mongoose = require('mongoose')

let orderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    unique: true
  },
  customer: {
    _id: String,
    first_name: String,
    last_name: String
  },
  products: {
    type: Array
  },
  status: {
    type: String
  },
  staff_id: {
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