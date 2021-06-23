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
  async show(req, res) {
    const { id } = req.params
    const user = await User.findByPk(id, { include: Role })
    return res.json({ user })
  }

  async update(req, res, next) {
    const { id, email, password, nikname } = req.body

    if (req.user.id !== id) {
      return next(
        ApiError.forbidden('Нет доступа, обновление другого пользователя')
      )
    }

    const user = await User.findByPk(id, { include: Role })

    if (!user) {
      return next(ApiError.badRequest('Нет такого пользователя'))
    }

    let newPassword = ''

    if (user.password != password) {
      newPassword = await bcrypt.hash(password, 5)
    }

    await user
      .update({
        email,
        password: !!newPassword ? newPassword : password,
        nikname,
      })
      .then(
        (resolve) => {
          const token = generateJwt(
            user.id,
            user.email,
            user.Roles.map((e) => e.name)
          )
          return res.json({ token })
        },
        (reject) => {
          return next(ApiError.badRequest('Ошибка при обновлении данных'))
        }
      )

    // return res.json({ token })
  }

  async delete(req, res, next) {
    const { id } = req.params
    if (req.user.id === id) {
      const user = await User.destroy({ where: { id } })
      return res.json({ user })
    }
    return next(
      ApiError.forbidden(
        'Сожалеем, но вы не можете удалить другого пользователя'
      )
    )
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
    await user.addRole(await Role.findOne({ where: { name: 'USER' } }))
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

  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.email, req.user.roles)
    res.json({ token })
  }
}

module.exports = new UserController()
