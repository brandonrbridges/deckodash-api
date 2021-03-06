/** Router */
const router = require('express').Router()

/** Models */
const User = require('../database/schema/User')
const Order = require('../database/schema/Order')

/**
 * @route /api/users
 */
router.get('/', (req, res) => {
  User.find({}).lean().exec((error, users) => {
    return res.json({
      status: 'success',
      users
    })
  })
})

/**
 * @route /api/users/:id
 */
router.get('/:_id', (req, res) => {
  let { _id } = req.params 

  User.findOne({ _id }).lean().exec((error, user) => {
    if(error) return console.error(error)

    Order.find({ staff_id: user._id }).lean().exec((error, order) => {
      if(error) return console.error(error)

      return res.json({
        status: 'success',
        order,
        user
      })
    })
  })
})

/**
 * @route /api/users/new
 */
router.post('/new', (req, res) => {
  new User({
    email: req.body.email,
    password: req.body.password,
    phone: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    role: req.body.role
  })
  .save()
})

/**
 * @route /api/users/update
 */
router.put('/update', (req, res) => {
  console.log(req.body)
})

/**
 * @route /api/users/delete
 */
router.delete('/delete', (req, res) => {

})

/** Export */
module.exports = router