const express = require('express')
const {
  newsLetterSubscription,
  newsLetterValidations,
  getSubscribers,
} = require('../controllers/newsletter')

const router = express.Router()

router.post('/', newsLetterValidations, newsLetterSubscription)
router.get('/subscribers', getSubscribers)

module.exports = router
