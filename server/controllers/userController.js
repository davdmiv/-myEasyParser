const { User } = require('../db/models/index')
const ApiError = require('../error/ApiError')
class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res, next) {
    const { id } = req.query
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'))
    }
    res.json(id)
  }
  async getOne(req, res) {
    const { id } = req.query
    const user = await User.findOne({ id })
    return res.json(user)
  }
  async getAll(req, res) {
    const users = await User.findAll()
    return res.json(users)
  }
}

module.exports = new UserController()
