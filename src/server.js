require('dotenv').config()

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('DATABASE CONNECTED')
})
.catch(e => {
  console.error(e)
})

app.use('/api', require('./api/api'))
app.use('/api/customers', require('./api/customers'))
app.use('/api/orders', require('./api/orders'))
app.use('/api/products', require('./api/products'))

app.listen(process.env.PORT || 8080, () => {
  console.log(`API RUNNING (${process.env.PORT})`)
})