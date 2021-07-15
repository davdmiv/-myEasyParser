const { ChangeNote, Rule, Privilege, UserRule } = require('../db/models/index')
const ApiError = require('../error/ApiError')

const checkShowPermition = async (user, rule) => {
  if (rule === null) return true
  if (user.id === rule.user_id) return true
  const userRules = await UserRule.findOne({
    where: { user_id: user.id, rule_id: rule.id },
    include: [
      { model: Privilege, as: 'privilege', where: { title: 'Подписчик' } },
    ],
  })
  return !!userRules
}

const checkEditPermition = async (user, rule) => {
  if (rule === null) return true
  if (user.id === rule.user_id) return true
  const userRules = await UserRule.findOne({
    where: { user_id: user.id, rule_id: rule.id },
    include: [
      { model: Privilege, as: 'privilege', where: { title: 'Владелец' } },
    ],
  })
  return !!userRules
}

class ChangeNoteController {
  async showPublic(req, res, next) {
    const { id } = req.params
    const changeNote = await ChangeNote.findByPk(id, { include: Rule })

    if (!changeNote) {
      return next(ApiError.badRequest('Нет такой заметки'))
    }

    if (!changeNote.Rule.public_status) {
      return next(ApiError.forbidden('У вас нет доступа'))
    }
    return res.json({ changeNote })
  }

  async show(req, res, next) {
    const { id } = req.params
    const changeNote = await ChangeNote.findByPk(id, { include: Rule })

    if (!changeNote) {
      return next(ApiError.badRequest('Нет такой заметки'))
    }

    const rule = changeNote.Rule

    if (await checkShowPermition(req.user, rule)) {
      return res.json({ changeNote })
    }
    return next(ApiError.forbidden('У вас нет доступа'))
  }

  async index(req, res) {
    const changenotes = await ChangeNote.findAll()
    return res.json(changenotes)
  }

  async update(req, res, next) {
    const { id } = req.params
    const { user_note } = req.body
    const changeNote = await ChangeNote.findByPk(id, { include: Rule })

    if (!changeNote) {
      return next(ApiError.badRequest('Нет такой заметки'))
    }

    const rule = changeNote.Rule

    if (await checkEditPermition(req.user, rule)) {
      changeNote.update({ user_note })
      return res.json({ changeNote })
    }
    return next(ApiError.forbidden('У вас нет доступа'))
  }

  async delete(req, res, next) {
    const { id } = req.params
    const changeNote = await ChangeNote.findByPk(id, { include: Rule })

    if (!changeNote) {
      return next(ApiError.badRequest('Нет такой заметки'))
    }

    const rule = changeNote.Rule

    if (await checkEditPermition(req.user, rule)) {
      await rule.destroy()
      return res.json({ rule })
    }
    return next(ApiError.forbidden('У вас нет доступа'))
  }
}

module.exports = new ChangeNoteController()
