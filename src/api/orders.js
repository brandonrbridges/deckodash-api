const router = require('express').Router()

const Order = require('../database/schema/Order')
const User = require('../database/schema/User')
const Customer = require('../database/schema/Customer')

/**
 * @route /api/orders
 */
router.get('/', (req, res) => {
  Order.find({}).lean().exec((error, orders) => {
    return res.json({
      status: 'success',
      orders
    })
  })
})

/**
 * @route /api/orders/:id
 */
router.get('/:order_id', (req, res) => {
  let { order_id } = req.params 

  Order.findOne({ order_id }).lean().exec((error, order) => {
    if(error) return console.error(error)

    Customer.findOne({ _id: order.customer._id }).lean().exec((error, customer) => {
      if(error) return console.error(error)

      User.findOne({ _id: order.staff_id }).lean().exec((error, user) => {
        if(error) return console.error(error)
  
        return res.json({
          status: 'success',
          customer,
          order,
          user
        })
      })
    })
  })
})

/**
 * @route /api/orders/new
 */
router.post('/new', (req, res) => {
  Order.count({}, (error, count) => {
    let order_id = count
    let leading = '0000'

    order_id++

    order_id = '' + order_id

    order_id = 'DCKRM-' + leading.substr(0, leading.length - order_id.length) + order_id

    Customer.findOne({ _id: req.body.customer_id }).lean().exec((error, customer) => {
      new Order({
        order_id,
        customer_id: req.body.customer_id,
        customer: {
          _id: customer._id,
          first_name: customer.first_name,
          last_name: customer.last_name
        },
        status: req.body.status,
        staff_id: req.body.staff_id
      }).save()
    })
    
  })
})

/**
 * @route /api/orders/update
 */
router.put('/update', (req, res) => {
  console.log(req.body)
})

/**
 * @route /api/orders/delete
 */
router.delete('/delete', (req, res) => {

})

/** Export */
module.exports = router