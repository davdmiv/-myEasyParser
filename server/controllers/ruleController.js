const { Rule, Privilege, UserRule } = require('../db/models/index')
const ApiError = require('../error/ApiError')

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
    const rules = await Rule.findAll()
    return res.json({ rules })
  }

  async testRule(req, res) {
    // метод который должен обмениваться с приложением парсера
    // а обновлять его данными вьюху создания правила
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
      page_changed,
      last_check,
      duration,
      public_status,
      description,
      activate_cnt,
      activate_status,
    } = req.body

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
      user_id: req.user.id,
    })

    //костыль
    if (rule) {
      await UserRule.create({
        user_id: req.user.id,
        rule_id: rule.id,
        privilege_id: 1,
      })
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
      page_changed,
      last_check,
      duration,
      public_status,
      description,
      activate_cnt,
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
      page_changed,
      last_check,
      duration,
      public_status,
      description,
      activate_cnt,
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
