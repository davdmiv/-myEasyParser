const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

module.exports = function (roles) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next()
    }
    try {
      const token = req.headers.authorization.split(' ')[1]
      console.log('############# ok')
      if (!token) {
        return next(ApiError.forbidden('Пользователь не авторизован'))
      }
      const { roles: userRoles } = jwt.verify(token, process.env.SECRET_KEY)
      let hasRole = false
      userRoles.forEach((role) => {
        if (roles.includes(role)) {
          hasRole = true
        }
      })
      if (!hasRole) {
        return next(ApiError.forbidden('У вас нет доступа'))
      }
      next()
    } catch (e) {
      return next(ApiError.forbidden('Пользователь не авторизован'))
    }
  }
}
