const { User, Role } = require('../../db/models/index')
const bcrypt = require('bcrypt')
const ApiError = require('../../error/ApiError')
const { Op } = require('sequelize')

class AdminUserController {
  async show(req, res) {
    const { id } = req.params
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
    const user = await User.destroy({ where: { id } })
    return res.json(user)
  }
}

module.exports = new AdminUserController()
