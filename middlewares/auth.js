const passport = require('passport')
const exceptions = require('../common/exceptions')


// Required authentication
const required = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(401).json(exceptions.exceptionType.invalidToken)
    }
    // Pass user to req
    req.user = user
    return next()
  })(req, res, next)
}


module.exports = { required }