const router = require('express').Router()

const Customer = require('../database/schema/Customer')

/**
 * @route /api/customers
 */
router.get('/', (req, res) => {
  let {
    count
  } = req.params
  
  Customer.find({}).sort({ date_added: -1 }).lean().exec((error, customers) => {
    return res.json({
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
    return res.json({
      status: 'success',
      customer
    })
  })
})

/**
 * @route /api/customers/new
 */
router.post('/new', (req, res) => {
  new Customer({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address: {
      line_one: req.body.address_line_one,
      line_two: req.body.address_line_two,
      city: req.body.address_city,
      county: req.body.address_county,
      postcode: req.body.address_postcode
    },
    email: req.body.email,
    phone: req.body.phone
  }).save()
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
  let { _id } = req.body
  Customer.findOneAndDelete({ _id })
  .catch(error => console.error(error))
})

/** Export */
module.exports = router