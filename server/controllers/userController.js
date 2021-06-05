const { User, Role } = require('../db/models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')
const { Op } = require('sequelize')

const generateJwt = (id, email, roles) => {
  return jwt.sign({ id, email, roles }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  })
}

class UserController {
  async show(req, res) {
    const { id } = req.params
    // const user = await User.findOne({ where: { id }, include: Role })
    const user = await User.findByPk(id, { include: Role })
    return res.json({ user })
  }

  async index(req, res) {
    const users = await User.findAll({ include: Role })
    return res.json({ users })
  }

  async create(req, res, next) {
    const {
      email,
      password,
      nikname,
      dynamic_rules_limit,
      static_rules_limit,
      dinamic_rules_owner,
      static_rules_owner,
      roles,
    } = req.body

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

    const user = await User.create({
      email,
      password: hashPassword,
      nikname,
      dynamic_rules_limit,
      static_rules_limit,
      dinamic_rules_owner,
      static_rules_owner,
    })

    const allUserRoles = await Role.findAll({
      where: { id: { [Op.or]: [...roles] } },
    })

    if (allUserRoles) {
      await user.addRole(allUserRoles)
    }

    await user.reload({ include: Role })
    return res.json({ user })
  }

  async update(req, res, next) {
    // не гоняй пароль, если пришёл, то обновляй, если нет, то нет
    const {
      id,
      email,
      password,
      nikname,
      dynamic_rules_limit,
      static_rules_limit,
      dinamic_rules_owner,
      static_rules_owner,
    } = req.body

    const user = await User.findByPk(id)

    if (!user) {
      return next(ApiError.badRequest('Нет такого пользователя'))
    }

    let newPassword = ''

    if (user.password != password) {
      newPassword = await bcrypt.hash(password, 5)
    }

    await user.update({
      email,
      password: !!newPassword ? newPassword : password,
      nikname,
      dynamic_rules_limit,
      static_rules_limit,
      dinamic_rules_owner,
      static_rules_owner,
    })
    return res.json(user)
  }

  async delete(req, res, next) {
    const { id } = req.params
    const deleted = await User.destroy({ where: { id } })
    if (deleted) {
      return res.json({ message: 'Пользователь удалён' })
    }
    return next(ApiError.badRequest('Нет такого пользователя'))
  }

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
}

module.exports = new UserController()
