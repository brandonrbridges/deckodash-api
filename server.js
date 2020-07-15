require('dotenv').config()

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const middleware = require('./src/middleware/middleware')

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

app.use('/auth', require('./src/auth/auth'))

app.use('/api/v1/', require('./src/api/api'))
app.use('/api/v1/customers', middleware, require('./src/api/customers'))
app.use('/api/v1/orders', middleware, require('./src/api/orders'))
app.use('/api/v1/products', middleware, require('./src/api/products'))
app.use('/api/v1/public', require('./src/api/public'))
app.use('/api/v1/users', middleware, require('./src/api/users'))

app.listen(process.env.PORT || 8080, () => {
  console.log(`API RUNNING (${process.env.PORT})`)
})