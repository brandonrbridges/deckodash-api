const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
  res.json({
    message: 'success',
    status: 'success'
  })
})

module.exports = Router