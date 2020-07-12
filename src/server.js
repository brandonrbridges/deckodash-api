require('dotenv').config()

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const middleware = require('./middleware/middleware')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.DB_URI, { 
  useFindAndModify: false,
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => {
  console.log('DATABASE CONNECTED')
})
.catch(e => {
  console.error(e)
})

app.use('/auth', require('./auth/auth'))

app.use('/api', require('./api/api'))
app.use('/api/customers', middleware, require('./api/customers'))
app.use('/api/orders', middleware, require('./api/orders'))
app.use('/api/products', middleware, require('./api/products'))
app.use('/api/public', require('./api/public'))
app.use('/api/users', middleware, require('./api/users'))

app.listen(process.env.PORT || 8080, () => {
  console.log(`API RUNNING (${process.env.PORT})`)
})