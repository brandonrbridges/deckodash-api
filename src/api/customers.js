const router = require('express').Router()

const Customer = require('../database/schema/Customer')

/**
 * @route /api/customers
 */
router.get('/', (req, res) => {
  Customer.find({}).lean().exec((error, customers) => {
    res.json({
      status: 'success',
      customers
    })
  })
})

/**
 * @route /api/customers/:id
 */
router.get('/:_id', (req, res) => {
  let { _id } = req.params 

  Customer.findOne({ _id }).lean().exec((error, customer) => {
    res.json({
      status: 'success',
      customer
    })
  })
})

/**
 * @route /api/customers/update
 */
router.put('/update', (req, res) => {
  console.log(req.body)
})

/**
 * @route /api/customers/delete
 */
router.delete('/delete', (req, res) => {

})

/** export */
module.exports = router