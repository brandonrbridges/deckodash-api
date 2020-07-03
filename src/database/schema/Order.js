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
  }
})

module.exports = mongoose.model('Order', orderSchema)