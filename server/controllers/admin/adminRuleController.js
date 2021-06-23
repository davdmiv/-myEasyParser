const { Rule } = require('../../db/models/index')
const jwt = require('jsonwebtoken')
const ApiError = require('../../error/ApiError')

class AdminRuleController {
  async show(req, res) {
    const { id } = req.params
    const rule = await Rule.findByPk(id, { include: 'changenotes' })
    return res.json({ rule })
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
      user_id,
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
      user_id,
    })
    return res.json({ rule })
  }

  async update(req, res) {
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

    const rule = await Rule.update({
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
    })
    return res.json({ rule })
  }

  async delete(req, res, next) {
    const { id } = req.params
    const rule = await Rule.destroy({ where: { id } })
    return res.json({ rule })
  }
}

module.exports = new AdminRuleController()
