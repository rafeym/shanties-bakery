const express = require('express')
const {
    createOrder,
    orderValidations,
    getOrders,
} = require('../controllers/orders')

const router = express.Router()

router.post('/', orderValidations, createOrder)
router.get('/:page', getOrders)

module.exports = router
