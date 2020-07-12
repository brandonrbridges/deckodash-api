const router = require('express').Router()

const Order = require('../database/schema/Order')

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
router.get('/:_id', (req, res) => {
  let { _id } = req.params 

  Order.findOne({ _id }).lean().exec((error, order) => {
    if(error) {
      console.error(error)
    }
    return res.json({
      status: 'success',
      order
    })
  })
})

/**
 * @route /api/orders/new
 */
router.post('/new', (req, res) => {
  new Order({
    customer_id: req.body.customer_id,
    status: req.body.status,
    staff_id: req.body.staff_id
  }).save()
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