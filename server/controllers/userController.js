const { User, Role } = require('../db/models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

const generateJwt = (id, email, roles) => {
  return jwt.sign({ id, email, roles }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  })
}

class UserController {
  async registration(req, res, next) {
    const { email, password } = req.body
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или пароль'))
    }
    const candidate = await User.findOne({ where: { email } })
    if (candidate) {
      return next(
        ApiError.badRequest('Пользователь с таким email уже существует')
      )
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({ email, password: hashPassword })
    await user.addRole(await Role.findOne({ where: { name: 'user' } }))
    await user.reload({ include: Role })
    const token = generateJwt(
      user.id,
      user.email,
      user.Roles.map((e) => e.name)
    )
    return res.json({ token })
  }

  async login(req, res, next) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email }, include: Role })
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'))
    }

    const token = generateJwt(
      user.id,
      user.email,
      user.Roles.map((e) => e.name)
    )
    return res.json({ token })
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.roles)
    res.json({ token })
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
