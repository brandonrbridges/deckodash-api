const router = require('express').Router()

const jwt = require('jsonwebtoken')

const User = require('../database/schema/User')

router.post('/', (req, res) => {
  User.findOne({ email: req.body.email }, (error, user) => {
    // return user.email

    if(user) {
      let payload = {
        email: user.email,
        password: user.password
      }
  
      let token = jwt.sign(payload, 'jwt_secret', { expiresIn: '2h' })
  
      let response = {
        message: 'Token created, Auth Successful',
        token,
        user: {
          email: user.email
        }
      }
  
      return res.status(200).json(response)
    } else {
      return res.status('409').json('Auth failed, admin not found')
    }
  })
})

module.exports = router