const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ArchivedOrderSchema = new Schema({
  order: {
    type: Object,
  },
})

module.exports = ArchivedOrder = mongoose.model(
  'ArchivedOrder',
  ArchivedOrderSchema
)
