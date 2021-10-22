const express = require('express')
const {
  getProducts,
  createProduct,
  findProductById,
  updateProductById,
  deleteProductById,
} = require('../controllers/products')

const router = express.Router()

router.get('/:page', getProducts)
router.get('/product/:id', findProductById)

router.put('/:id', updateProductById)
router.post('/', createProduct)
router.delete('/:id', deleteProductById)

module.exports = router
