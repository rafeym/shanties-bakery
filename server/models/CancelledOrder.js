const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CancelledOrderSchema = new Schema({
  order: {
    type: Object,
  },
})

module.exports = CancelledOrder = mongoose.model(
  'CancelledOrder',
  CancelledOrderSchema
)
