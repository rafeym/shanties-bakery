const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SubscriberSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
})

module.exports = Subscriber = mongoose.model('Subscriber', SubscriberSchema)
