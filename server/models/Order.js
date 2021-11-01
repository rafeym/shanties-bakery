const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OrderSchema = new Schema(
    {
        orderNumber: {
            type: String,
            unique: true,
        },
        fname: {
            type: String,
            required: true,
        },
        lname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        items: {
            type: [Object],
            required: true,
        },
        orderStatus: {
            type: Boolean,
            default: false,
        },
        deliveryStatus: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = Order = mongoose.model('Order', OrderSchema)
