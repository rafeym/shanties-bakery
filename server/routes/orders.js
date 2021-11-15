const express = require('express')
const {
  createOrder,
  orderValidations,
  getOrders,
  getOrderById,
  updateOrderStatus,
  updateDeliveryStatus,
  deleteOrder,
} = require('../controllers/orders')

const router = express.Router()

router.get('/:page', getOrders)
router.get('/order/:id', getOrderById)
router.post('/', orderValidations, createOrder)
router.put('/updateOrderStatus/:id', updateOrderStatus)
router.put('/updateDeliveryStatus/:id', updateDeliveryStatus)
router.delete('/deleteOrder/:id', deleteOrder)

module.exports = router
