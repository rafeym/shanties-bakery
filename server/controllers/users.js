const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')

// @route   POST api/user/register
// @desc    Register user
// @access  Public
module.exports.registerValidations = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please enter a valid email').isEmail(),
  check('password', 'Password must be 6 or more characters').isLength({
    min: 6,
  }),
]

module.exports.registerUser = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    })
  }

  const { name, email, password } = req.body
  try {
    const user = await User.findOne({ email })

    // if email in use
    if (user) {
      return res.status(400).json({
        errors: [
          {
            msg: 'Email is taken',
          },
        ],
      })
    }

    // If no user with given email
    const newUser = new User({
      name,
      email,
      password,
    })

    // encrypt pass
    const salt = await bcrypt.genSalt(10)
    // save pass
    newUser.password = await bcrypt.hash(password, salt)

    await newUser.save()

    // payload to gen token
    const payload = {
      user: {
        id: newUser.id,
      },
    }

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: 3600,
      },
      (err, token) => {
        if (err) throw err
        res.json({ token })
      }
    )
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
}

// @route   POST api/user/login
// @desc    Login user
// @access  Public
module.exports.loginValidations = [
  check('email', 'Please enter a valid email').isEmail(),
  check('password', 'Password is required').exists(),
]

module.exports.loginUser = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    })
  }

  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        errors: [
          {
            msg: 'No account with that email',
          },
        ],
      })
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({
        errors: [
          {
            msg: 'Incorrect email or password',
          },
        ],
      })
    }

    // payload for jwt
    const payload = {
      user: {
        id: user.id,
      },
    }

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: 3600,
      },
      (err, token) => {
        if (err) throw err
        res.json({ token })
      }
    )
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
}

// @route   GET api/user/
// @desc    Get user information
// @access  Private
module.exports.getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    return res.json(user)
  } catch (error) {
    return res.status(500).send('Server Error')
  }
}
