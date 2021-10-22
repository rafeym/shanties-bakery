const mongoose = require('mongoose')
const formidable = require('formidable')
const cloudinary = require('../config/cloudinary')
const Product = require('../models/Product')
const { v4: uuidv4 } = require('uuid')

// @route   GET api/products
// @desc    Gets all products from database
// @access  Public
module.exports.getProducts = async (req, res) => {
  const { page } = req.params
  const pageLimit = 10
  const skip = (page - 1) * pageLimit
  try {
    const count = await Product.find({}).countDocuments()
    const products = await Product.find({}).skip(skip).limit(pageLimit)

    return res.status(200).json({ products, count, pageLimit })
  } catch (error) {
    res.status(404).json({ msg: error.message })
  }
}

// @route   POST api/products
// @desc    Creates a product
// @access  Private
module.exports.createProduct = async (req, res) => {
  const form = formidable({ multiples: true })
  form.parse(req, async (error, fields, files) => {
    const { name, price, description, allergens } = fields
    const errors = []
    if (
      name === '' ||
      price === '' ||
      description === '' ||
      Object.keys(files).length === 0
    ) {
      errors.push({ msg: 'One or more required field is missing' })
    } else {
      const { type } = files.image
      const typeSplit = type.split('/')
      const extension = typeSplit[1].toLowerCase()

      if (extension !== 'jpg' && extension !== 'jpeg' && extension !== 'png') {
        errors.push({ msg: `${extension} is not a valid extension` })
      }
    }

    if (errors.length !== 0) {
      return res.status(400).json({ errors })
    } else {
      try {
        const { public_id, secure_url } = await cloudinary.uploader.upload(
          files.image.path
        )
        const product = await Product.create({
          name,
          price,
          description,
          allergens,
          sku: uuidv4(),
          image: public_id,
          cloudinary_secure_url: secure_url,
        })
        return res.status(200).json({ msg: 'Product created!', product })
      } catch (error) {
        return res.status(500).json({ errors: error, msg: error.message })
      }
    }
  })
}

// @route   GET api/products/:id
// @desc    Get product by ID
// @access  Public
module.exports.findProductById = async (req, res) => {
  const { id } = req.params

  try {
    const product = await Product.findOne({ _id: id })

    return res.status(200).json({ product })
  } catch (error) {
    return res.status(400).json({ msg: error.message })
  }
}

// @route   PUT api/products/:id
// @desc    Get product by ID and UPDATE
// @access  Private
module.exports.updateProductById = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: 'Product does not exist' })
  }

  const form = formidable({ multiples: true })
  form.parse(req, async (error, fields, files) => {
    const { name, price, description, allergens } = fields
    const errors = []
    if (name === '' || price === '' || description === '') {
      errors.push({ msg: 'One or more required field is missing' })
    }

    if (errors.length !== 0) {
      return res.status(400).json({ errors })
    } else {
      try {
        let product = await Product.findById(id)

        const updatedProduct = {
          name,
          price,
          description,
          allergens,
        }

        product = await Product.findByIdAndUpdate(id, updatedProduct, {
          new: true,
        })
        return res.status(200).json({ msg: 'Product Updated!', product })
      } catch (error) {
        return res.status(500).json({ errors: error, msg: error.message })
      }
    }
  })
}

// @route   DELETE api/products/:id
// @desc    Get product by ID and DELETE
// @access  Private
module.exports.deleteProductById = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: 'Product does not exist' })
  }

  try {
    //Find product
    const product = await Product.findById(id)

    // delete product image from cloudinary
    await cloudinary.uploader.destroy(product.image)

    //Remove product from database
    await Product.findByIdAndRemove(id)

    return res.status(200).json({ msg: 'Product deleted!', product })
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}
