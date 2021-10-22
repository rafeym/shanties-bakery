const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sku: {
      type: String,
      unique: true,
    },
    allergens: {
      type: [String],
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    cloudinary_secure_url: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = Product = mongoose.model('Product', ProductSchema)
