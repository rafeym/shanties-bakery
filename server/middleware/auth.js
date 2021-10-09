const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token')

  if (!token) {
    return res.status(401).json({
      msg: 'Session expired. Please login again',
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // Set user id in req.user
    req.user = decoded.user
    next()
  } catch (error) {
    res.status(401).json({
      msg: 'Session expired',
    })
  }
}
