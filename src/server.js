require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors')
const monoose = require('mongoose')



app.listen(process.env.PORT || 8080, () => {
  console.log('server is listening on 300')
})