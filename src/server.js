require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('DATABASE CONNECTED')
})
.catch(e => {
  console.error(e)
})

app.use('/api', require('./routes/api'))

app.listen(process.env.PORT || 8080, () => {
  console.log(`API RUNNING (${process.env.PORT})`)
})