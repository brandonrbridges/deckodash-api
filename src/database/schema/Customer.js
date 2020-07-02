const mongoose = require('mongoose')

let customerSchema = new mongoose.Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  address: {
    line_one: String,
    line_two: String,
    city: String,
    county: String,
    postcode: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  orders: {
    type: Array
  },
  stripe_id: {
    type: String
  }
})

module.exports = mongoose.model('Customer', customerSchema)