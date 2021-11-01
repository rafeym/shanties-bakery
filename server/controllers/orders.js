const Order = require('../models/Order')
const { check, validationResult } = require('express-validator')
const { v4: uuidv4 } = require('uuid')
const sgMail = require('@sendgrid/mail')

// @route   POST api/checkout
// @desc    Create Order
// @access  Private

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
        const order = await Order.create({
            orderNumber: uuidv4(),
            fname,
            lname,
            email,
            address,
            phone,
            items: cart,
        })

        // Email integration
        sgMail.setApiKey(process.env.SEND_GRID_EMAIL_API_KEY)

        const message = {
            to: email,
            from: 'client.dev.2021@gmail.com',
            subject: 'Order Confirmation',
            html: `
            <h1> Your Order Summary </h1>
            <h3>${cart.map(
                (item) => `${item.name} - $${item.price} - QTY: ${item.qty}`
            )}</h3>
            <h3> Order Total $${cart.reduce(
                (curr, prev) => Math.ceil(prev.price * prev.qty + curr),
                0
            )} </h3>
            `,
        }

        await sgMail.send(message)

        return res.status(200).json({
            msg: 'Your order has been placed. An email confirmation has been sent to the email provided',
            order,
        })
    } catch (error) {}
}

module.exports.getOrders = async (req, res) => {
    const { page } = req.params
    const pageLimit = 8
    const skip = (page - 1) * pageLimit
    try {
        const count = await Order.find({}).countDocuments()
        const orders = await Order.find({}).skip(skip).limit(pageLimit)

        return res.status(200).json({ orders, count, pageLimit })
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}
