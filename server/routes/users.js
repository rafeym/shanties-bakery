const express = require('express')
const {
  registerUser,
  loginUser,
  loginValidations,
  registerValidations,
} = require('../controllers/users')

const router = express.Router()

router.post('/register', registerValidations, registerUser)
router.post('/login', loginValidations, loginUser)

module.exports = router
