const { User } = require('../db/models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  })
}

class UserController {
  async registration(req, res) {
    const { email, password } = req.body
    if (!email || !password) {
      return ApiError.badRequest('Некорректный email или пароль')
    }
    const candidate = await User.findOne({ where: { email } })
    if (candidate) {
      return ApiError.badRequest('Пользователь с таким email уже существует')
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({ email, password: hashPassword })
    const token = generateJwt(user.id, user.email, user.role)
    return res.json({ token })
  }
  async login(req, res, next) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'))
    }
    const token = generateJwt(user.id, user.email, user.role)
    return res.json({ token })
  }
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
