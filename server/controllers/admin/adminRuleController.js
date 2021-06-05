const { Rule, Privilege, User, UserRule } = require('../../db/models/index')
const jwt = require('jsonwebtoken')
const ApiError = require('../../error/ApiError')

class AdminRuleController {
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

    if (isUserAdmin(req.user) || (await checkShowPermition(req.user, rule))) {
      return res.json({ rule })
    }

    return next(ApiError.forbidden('У вас нет доступа к данному правилу'))
  }

  async index(req, res) {
    const rules = await Rule.findAll()
    return res.json(rules)
  }

  async testRule(req, res) {
    // метод который должен обмениваться с приложением парсера
    // а обновлять его данными вьюху создания правила
  }

  // фильный create, когда все данные протестированы и собраны
  async create(req, res) {
    const {
      id,
      name,
      url,
      shrub_rule,
      shrub_cache,
      frequency,
      page_type,
      page_changed,
      last_check,
      duration,
      public_status,
      description,
      activate_cnt,
      activate_status,
      user_id,
    } = req.body

    // костыль на случай единой формы у админа и юзера для создания правила
    const validId = !!req.user.roles.includes('ADMIN') ? user_id : req.user.id

    const rule = await Rule.create({
      name,
      url,
      shrub_rule,
      shrub_cache,
      frequency,
      page_type,
      page_changed,
      last_check,
      duration,
      public_status,
      description,
      activate_cnt,
      activate_status,
      user_id: validId,
    })
    return res.json(rule)
  }

  async updete(req, res) {
    const {
      id,
      name,
      url,
      shrub_rule,
      shrub_cache,
      frequency,
      page_type,
      page_changed,
      last_check,
      duration,
      public_status,
      description,
      activate_cnt,
      activate_status,
      user_id,
    } = req.body

    await rule.updete({
      id,
      name,
      url,
      shrub_rule,
      shrub_cache,
      frequency,
      page_type,
      page_changed,
      last_check,
      duration,
      public_status,
      description,
      activate_cnt,
      activate_status,
      user_id: validId,
    })
    return res.json(rule)
  }
  async delete(req, res) {}
}

module.exports = new AdminRuleController()
