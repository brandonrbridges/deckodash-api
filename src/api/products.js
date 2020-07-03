const router = require('express').Router()

const Product = require('../database/schema/Product')

/**
 * @route /api/products
 */
router.get('/', (req, res) => {
  Product.find({}).lean().exec((error, products) => {
    res.json({
      status: 'success',
      products
    })
  })
})

/**
 * @route /api/products/:id
 */
router.get('/:_id', (req, res) => {
  let { _id } = req.params 

  Product.findOne({ _id }).lean().exec((error, product) => {
    res.json({
      status: 'success',
      product
    })
  })
})

/**
 * @route /api/products/new
 */
router.post('/new', (req, res) => {
  console.log(req.body)
})

/**
 * @route /api/products/update
 */
router.put('/update', (req, res) => {
  console.log(req.body)
})

/**
 * @route /api/products/delete
 */
router.delete('/delete', (req, res) => {

})

/** export */
module.exports = router