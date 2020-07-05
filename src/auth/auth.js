const router = require('express').Router()

const jwt = require('jsonwebtoken')

const User = require('../database/schema/User')

router.post('/', (req, res) => {
  User.findOne({ email: req.body.email }, (error, user) => {
    // return user.email

    if(user) {
      let payload = {
        email: user.email,
        password: user.password,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role
      }
  
      let token = jwt.sign(payload, 'jwt_secret', { expiresIn: '2h' })
  
      let response = {
        message: 'Token created, Auth Successful',
        token,
        user
      }
  
      return res.status(200).json(response)
    } else {
      return res.status('409').json('Auth failed, admin not found')
    }
  })
})

module.exports = router