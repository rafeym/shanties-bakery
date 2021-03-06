const Order = require('../models/Order')
const Product = require('../models/Product')
const CancelledOrder = require('../models/CancelledOrder')
const ArchivedOrder = require('../models/ArchivedOrder')
const mongoose = require('mongoose')
const { check, validationResult } = require('express-validator')
const { v4: uuidv4 } = require('uuid')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SEND_GRID_EMAIL_API_KEY)

module.exports.orderValidations = [
  check('fname', 'First Name is required').not().isEmpty(),
  check('lname', 'Last Name is required').not().isEmpty(),
  check('email', 'Valid email is required').isEmail(),
  check('address', 'Delivery address is required').not().isEmpty(),
  check('phone', 'Phone number is required').not().isEmpty(),
]

module.exports.createOrder = async (req, res) => {
  const { fname, lname, email, address, phone, cart } = req.body

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    })
  }

  try {
    //get all products
    const products = await Product.find({})

    //get products ids
    const productIds = products.map((prod) => prod.sku)

    const outOfStock = []

    cart.forEach((item) => {
      const prodExist = productIds.find((sku) => sku === item.sku)

      if (!prodExist) {
        //update removeProds with items ids
        outOfStock.push({ msg: `Item ${item.name} is no longer available.` })
      }
    })

    if (outOfStock.length !== 0) {
      return res.status(404).json({ outOfStock })
    }
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message })
  }

  try {
    const orderTotal = cart.reduce(
      (curr, prev) => Math.ceil(prev.price * prev.qty + curr),
      0
    )

    const order = await Order.create({
      orderNumber: uuidv4(),
      fname,
      lname,
      email,
      address,
      phone,
      items: cart,
      total: orderTotal,
    })

    const { orderNumber, total } = order

    try {
      // Email integration
      const message = {
        to: email,
        from: 'shantiesbakery@gmail.com',
        templateId: 'd-7c09b2179c564cc8b05082e495f97384',

        dynamic_template_data: {
          fname,
          lname,
          orderNumber,
          email,
          phone,
          address,
          total,
          cart: cart.map((item) => {
            return {
              item_name: item.name,
              item_price: item.price,
              item_qty: item.qty,
            }
          }),
        },
      }

      await sgMail.send(message)
    } catch (error) {
      console.log(error)
    }

    return res.status(200).json({
      msg: 'Order placed! Check your inbox for your order confirmation.',
      order,
    })
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message })
  }
}

module.exports.getOrders = async (req, res) => {
  const { page } = req.params
  const pageLimit = 8
  const skip = (page - 1) * pageLimit
  try {
    const count = await Order.find({}).countDocuments()
    const orders = await Order.find({})
      .sort({ _id: -1 })
      .skip(skip)
      .limit(pageLimit)

    return res.status(200).json({ orders, count, pageLimit })
  } catch (error) {
    res.status(404).json({ msg: error.message })
  }
}

module.exports.getOrderById = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: 'Order does not exist' })
  }

  try {
    const order = await Order.findOne({ _id: id })
    return res.status(200).json({ order })
  } catch (error) {
    return res.status(400).json({ msg: error.message })
  }
}

module.exports.updateOrderStatus = async (req, res) => {
  const { orderStat } = req.body
  const { id } = req.params

  try {
    let order = await Order.findById(id)

    const updatedOrder = {
      orderStatus: orderStat,
    }

    order = await Order.findByIdAndUpdate(id, updatedOrder, { new: true })

    const { fname, lname, orderNumber, email, phone, address, items, total } =
      order

    try {
      // Send email when order status is complete
      if (order.orderStatus === true) {
        const message = {
          to: email,
          from: 'shantiesbakery@gmail.com',
          templateId: 'd-14bb722afbec4cf9a38f39061709e803',

          dynamic_template_data: {
            fname,
            lname,
            orderNumber,
            email,
            phone,
            address,
            total,
            cart: items.map((item) => {
              return {
                item_name: item.name,
                item_price: item.price,
                item_qty: item.qty,
              }
            }),
          },
        }

        await sgMail.send(message)
      }
    } catch (error) {
      return res.status(500).json({ errors: error, msg: error.message })
    }

    return res.status(200).json({ msg: 'Order status updated!', order })
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message })
  }
}

module.exports.updateDeliveryStatus = async (req, res) => {
  const { deliveryStat } = req.body
  const { id } = req.params

  try {
    let order = await Order.findById(id)

    const updatedOrder = {
      deliveryStatus: deliveryStat,
    }

    order = await Order.findByIdAndUpdate(id, updatedOrder, { new: true })

    const { fname, lname, orderNumber, email, phone, address, items, total } =
      order

    try {
      // Send email when order status is complete
      if (order.deliveryStatus === true) {
        const message = {
          to: email,
          from: 'shantiesbakery@gmail.com',
          templateId: 'd-752e97be9dad43b5b1fa7d6523cc4e0f',

          dynamic_template_data: {
            fname,
            lname,
            orderNumber,
            email,
            phone,
            address,
            total,
            cart: items.map((item) => {
              return {
                item_name: item.name,
                item_price: item.price,
                item_qty: item.qty,
              }
            }),
          },
        }

        await sgMail.send(message)
      }
    } catch (error) {
      return res.status(500).json({ errors: error, msg: error.message })
    }
    return res.status(200).json({ msg: 'Delivery status updated!', order })
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message })
  }
}

module.exports.deleteOrder = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: 'Order does not exist' })
  }

  try {
    const order = await Order.findById(id)

    const { orderNumber, fname, lname, email, phone, address, items, total } =
      order

    try {
      // Send cancellation email
      const message = {
        to: email,
        from: 'shantiesbakery@gmail.com',
        templateId: 'd-f309a9fe2bec47f09bc776e23beb31ff',

        dynamic_template_data: {
          fname,
          lname,
          orderNumber,
          email,
          phone,
          address,
          total,
          cart: items.map((item) => {
            return {
              item_name: item.name,
              item_price: item.price,
              item_qty: item.qty,
            }
          }),
        },
      }
      await sgMail.send(message)
    } catch (error) {
      return res.status(500).json({ errors: error, msg: error.message })
    }

    await CancelledOrder.create({
      order,
    })

    await Order.findByIdAndRemove(id)

    return res.status(200).json({ msg: 'Order Cancelled', order: order })
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message })
  }
}

module.exports.getCancelledOrders = async (req, res) => {
  const { page } = req.params
  const pageLimit = 8
  const skip = (page - 1) * pageLimit

  try {
    const count = await CancelledOrder.find({}).countDocuments()
    const cancelledOrders = await CancelledOrder.find({})
      .sort({ _id: -1 })
      .skip(skip)
      .limit(pageLimit)

    return res.status(200).json({ cancelledOrders, count, pageLimit })
  } catch (error) {
    res.status(404).json({ msg: error.message })
  }
}

module.exports.getCancelledOrder = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: 'Order does not exist' })
  }

  try {
    const order = await CancelledOrder.findOne({ _id: id })
    return res.status(200).json({ order })
  } catch (error) {
    return res.status(400).json({ msg: error.message })
  }
}

module.exports.archiveOrder = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: 'Order does not exist' })
  }
  try {
    const order = await Order.findById(id)

    await ArchivedOrder.create({
      order,
    })

    await Order.findByIdAndRemove(id)

    return res.status(200).json({ msg: 'Order Archived', order })
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message })
  }
}

module.exports.getArchivedOrders = async (req, res) => {
  const { page } = req.params
  const pageLimit = 8
  const skip = (page - 1) * pageLimit

  try {
    const count = await ArchivedOrder.find({}).countDocuments()
    const archivedOrders = await ArchivedOrder.find({})
      .sort({ _id: -1 })
      .skip(skip)
      .limit(pageLimit)

    return res.status(200).json({ archivedOrders, count, pageLimit })
  } catch (error) {
    res.status(404).json({ msg: error.message })
  }
}

module.exports.getArchivedOrder = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: 'Order does not exist' })
  }

  try {
    const order = await ArchivedOrder.findOne({ _id: id })
    return res.status(200).json({ order })
  } catch (error) {
    return res.status(400).json({ msg: error.message })
  }
}
