const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')

// Token Gen
const createToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '12h',
  })
}

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
  const { name, email, password } = req.body

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    })
  }

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

    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(password, salt)

    try {
      const newUser = await User.create({
        name,
        email,
        password: hashPass,
      })

      // Create auth token
      const token = createToken(newUser)

      return res.status(200).json({ msg: 'Account created!', token })
    } catch (error) {
      return res.status(500).json({ errors: error })
    }
  } catch (error) {
    return res.status(500).json({ errors: error })
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

    if (user) {
      const matchPass = await bcrypt.compare(password, user.password)
      if (matchPass) {
        const token = createToken(user)
        return res.status(200).json({ msg: 'Login successful!', token })
      } else {
        return res
          .status(401)
          .json({ errors: [{ msg: 'Incorrect email or password' }] })
      }
    } else {
      return res
        .status(404)
        .json({ errors: [{ msg: 'No account associated with that email' }] })
    }
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
}
