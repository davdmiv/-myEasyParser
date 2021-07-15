const { Rule, Privilege, UserRule, ChangeNote } = require('../db/models/index')
const ApiError = require('../error/ApiError')
const { Op } = require('sequelize')
const axios = require('axios').default
// const { and, or, ne, in: opIn } = Sequelize.Op

const checkShowPermition = async (user, rule) => {
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
  if (user.id === rule.user_id) return true
  const userRules = await UserRule.findOne({
    where: { user_id: user.id, rule_id: rule.id },
    include: [
      { model: Privilege, as: 'privilege', where: { title: 'Владелец' } },
    ],
  })
  return !!userRules
}

class RuleController {
  async showPublic(req, res) {
    const { id } = req.params
    const rule = await Rule.findOne({
      where: { id, public_status: true },
      include: 'changenotes',
    })
    return res.json({ rule })
  }

  async indexPublic(req, res) {
    const rules = await Rule.findAll({
      where: { public_status: true },
      include: 'changenotes',
    })
    return res.json({ rules })
  }

  async show(req, res, next) {
    const { id } = req.params

    const rule = await Rule.findByPk(id, { include: 'changenotes' })

    if (!rule) {
      return next(ApiError.badRequest('Нет такого правила'))
    }

    if (await checkShowPermition(req.user, rule)) {
      return res.json({ rule })
    }

    return next(ApiError.forbidden('У вас нет доступа к данному правилу'))
  }

  async index(req, res) {
    const userRules = await UserRule.findAll({
      attributes: [['rule_id', 'id']],
      where: { user_id: req.user.id },
    })

    const allUserRuleIds = userRules.map((userRule) => userRule.dataValues.id)

    const rules = await Rule.findAll({
      where: {
        [Op.or]: [
          { user_id: req.user.id },
          { user_id: { [Op.in]: allUserRuleIds } },
        ],
      },
      include: [
        { association: 'changenotes' },
        { association: 'owner', attributes: ['email', 'nikname'] },
      ],
    })
    return res.json({ rules })
  }

  async testRule(req, res, next) {
    // метод который должен обмениваться с приложением парсера
    // а обновлять его данными вьюху создания правила
    try {
      const testResult = await axios({
        method: 'post',
        url: 'http://localhost:5001/api/rules/test',
        responseType: 'json',
        params: { ...req.body },
        timeout: 60000,
      })
      return res.json(testResult.data)
    } catch (error) {
      return next(ApiError.internal(error.response.data.message))
    }
    // return res.json(testResult.data)
  }

  // фильный create, когда все данные протестированы и собраны
  async create(req, res) {
    const {
      name,
      url,
      shrub_rule,
      shrub_cache,
      frequency,
      page_type,
      public_status,
      description,
      test_change_note_id,
    } = req.body

    const rule = await Rule.create({
      name,
      url,
      shrub_rule,
      shrub_cache,
      frequency,
      page_type,
      public_status,
      description,
      user_id: req.user.id,
    })

    //костыль
    if (rule) {
      await UserRule.create({
        user_id: req.user.id,
        rule_id: rule.id,
        privilege_id: 1,
      })

      if (test_change_note_id) {
        await ChangeNote.findByPk(test_change_note_id).then((note) =>
          note.update({ rule_id: rule.id })
        )
      }
    }

    return res.json({ rule })
  }

  async update(req, res, next) {
    const { id } = req.params
    const {
      name,
      url,
      shrub_rule,
      shrub_cache,
      frequency,
      page_type,
      public_status,
      description,
      activate_status,
    } = req.body

    const rule = await Rule.findByPk(id, { include: 'changenotes' })

    if (!(await checkEditPermition(req.user, rule))) {
      return next(ApiError.forbidden('У вас нет доступа к данному правилу'))
    }

    await rule.update({
      name,
      url,
      shrub_rule,
      shrub_cache,
      frequency,
      page_type,
      public_status,
      description,
      activate_status,
    })
    return res.json({ rule })
  }

  async delete(req, res, next) {
    const { id } = req.params
    const rule = await Rule.findByPk(id)

    if (!(await checkEditPermition(req.user, rule))) {
      return next(ApiError.forbidden('У вас нет доступа к данному правилу'))
    }
    await rule.destroy()
    return res.json({ rule })
  }
}

module.exports = new RuleController()
