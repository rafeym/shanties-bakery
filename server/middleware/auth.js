const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  const token = authHeader.split('Bearer')[1]

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch (error) {
    return res.status(401).json({ msg: 'Session expired.' })
  }
}
