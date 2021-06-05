const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

module.exports = function (allowedRoles) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next()
    }
    try {
      const token = req.headers.authorization.split(' ')[1]
      if (!token) {
        return next(ApiError.forbidden('Пользователь не авторизован token'))
      }
      const { id, email, roles } = jwt.verify(token, process.env.SECRET_KEY)
      let hasRole = false
      roles.forEach((role) => {
        if (allowedRoles.includes(role)) {
          hasRole = true
        }
      })
      if (!hasRole) {
        return next(ApiError.forbidden('У вас нет доступа'))
      }
      req.user = { id, email, roles }
      next()
    } catch (e) {
      return next(ApiError.forbidden('Пользователь не авторизован'))
    }
  }
}
