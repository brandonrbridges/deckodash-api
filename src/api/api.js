const router = require('express').Router()

router.get('/', (req, res) => {
  return res.json({
    status: 'success'
  })
})

/** Export */
module.exports = router