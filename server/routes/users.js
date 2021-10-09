const express = require('express')
const {
  getUserInfo,
  registerUser,
  loginUser,
  loginValidations,
  registerValidations,
} = require('../controllers/users')

const auth = require('../middleware/auth')

const router = express.Router()

router.post('/register', registerValidations, registerUser)
router.post('/login', loginValidations, loginUser)
router.get('/', auth, getUserInfo)

module.exports = router
