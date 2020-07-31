const router = require('express').Router()

const Customer = require('../database/schema/Customer')
const Order = require('../database/schema/Order')
const User = require('../database/schema/User')

/**
 * @route /api/public/:id
 */
router.get('/:_id', (req, res) => {
  let { _id } = req.params

  Order.findOne({ _id }).lean().exec((error, order) => {
    if(error) return res.json({
      success: false,
      message: 'there was an error fetching public order'
    })

    Customer.findOne({ _id: order.customer._id }).lean().exec((error, customer) => {
      if(error) return res.json({
        success: false,
        message: 'there was no customer found with this public order'
      })

      User.findOne({ _id: order.staff_id }).lean().exec((error, user) => {
        if(error) return res.json({
          success: false,
          message: 'there was no staff id attached to this public order'
        })

        return res.json({
          success: true,
          message: 'public order found',
          customer,
          order,
          user
        })
      })
    })
  })
})

router.put('/:_id/update', (req, res) => {
  let { _id } = req.params
  let { quote_accepted } = req.query

  let status = null

  if(quote_accepted === 'true') {
    status = 'accepted'
  } else if(quote_accepted === 'false') {
    status = 'declined'
  }

  Order.findOneAndUpdate({ _id }, { $set: { status } }, { new: true })
  .then(order => {
    return res.json({
      success: true,
      message: 'order updated',
      order
    })
  })  
})

/** Export */
module.exports = router