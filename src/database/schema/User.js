const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  role: {
    type: String
  },
  date_created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', userSchema)