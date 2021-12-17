const express = require('express')
const {
  createOrder,
  orderValidations,
  getOrders,
  getOrderById,
  updateOrderStatus,
  updateDeliveryStatus,
  deleteOrder,
  getCancelledOrders,
  getCancelledOrder,
  archiveOrder,
  getArchivedOrders,
  getArchivedOrder,
} = require('../controllers/orders')

const router = express.Router()

router.get('/:page', getOrders)
router.get('/order/:id', getOrderById)
router.post('/', orderValidations, createOrder)
router.put('/updateOrderStatus/:id', updateOrderStatus)
router.put('/updateDeliveryStatus/:id', updateDeliveryStatus)
router.delete('/deleteOrder/:id', deleteOrder)
router.get('/cancelled/:page', getCancelledOrders)
router.get('/cancelled/details/:id', getCancelledOrder)
router.delete('/archiveOrder/:id', archiveOrder)
router.get('/archivedOrders/:page', getArchivedOrders)
router.get('/archivedOrders/details/:id', getArchivedOrder)

module.exports = router
