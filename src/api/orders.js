const router = require('express').Router()

const Order = require('../database/schema/Product')

/**
 * @route /api/orders
 */
router.get('/', (req, res) => {
  Order.find({}).lean().exec((error, orders) => {
    res.json({
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
    res.json({
      status: 'success',
      order
    })
  })
})

/**
 * @route /api/orders/new
 */
router.post('/new', (req, res) => {
  console.log(req.body)
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

/** export */
module.exports = router