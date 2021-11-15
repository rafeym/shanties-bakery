const { check, validationResult } = require('express-validator')
const mailchimp = require('@mailchimp/mailchimp_marketing')
const Subscriber = require('../models/Subscriber')

module.exports.newsLetterValidations = [
  check('firstname', 'First name is required').not().isEmpty(),
  check('lastname', 'Last name is required').not().isEmpty(),
  check('email', 'Valid email is required').isEmail(),
]

mailchimp.setConfig({
  apiKey: process.env.MAIL_CHIMP_API_KEY,
  server: process.env.MAIL_CHIMP_SERVER_PREFIX,
})

module.exports.newsLetterSubscription = async (req, res) => {
  const { firstname, lastname, email } = req.body

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    })
  }

  try {
    const subscriber = await Subscriber.findOne({ email })

    if (subscriber) {
      return res.status(400).json({
        errors: [
          {
            msg: 'This email is already subscribed',
          },
        ],
      })
    }

    try {
      await Subscriber.create({
        email,
      })
    } catch (error) {
      return res.status(500).json({ errors: error })
    }
  } catch (error) {
    return res.status(500).json({ errors: error })
  }

  try {
    await mailchimp.lists.addListMember(
      process.env.MAIL_CHIMP_LIST_ID,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstname,
          LNAME: lastname,
        },
      },
      {
        skipMergeValidation: false,
      }
    )

    return res.status(200).json({ msg: 'Thank you for subscribing!' })
  } catch (error) {
    console.log(error.message)
  }
}

module.exports.getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find({})

    return res.status(200).json({ subscribers })
  } catch (error) {
    return res.statu(404).json({ msg: error.message })
  }
}
