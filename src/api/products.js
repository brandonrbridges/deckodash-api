const router = require('express').Router()

const Product = require('../database/schema/Product')

/**
 * @route /api/products
 */
router.get('/', (req, res) => {
  Product.find({}).lean().exec((error, products) => {
    return res.json({
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
    return res.json({
      status: 'success',
      product
    })
  })
})

/**
 * @route /api/products/new
 */
router.post('/new', (req, res) => {
  new Product({
    name: req.body.name,
    sku: req.body.sku,
    description: req.body.description,
    price: req.body.price,
    sale_price: req.body.sale_price,
    dimensions: {
      height: req.body.height,
      width: req.body.width,
      depth: req.body.depth
    }
  })
  .save()
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