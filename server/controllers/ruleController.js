const { Rule } = require('../db/models/index')
const ApiError = require('../error/ApiError')

class RuleController {
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
      status,
      description,
      activate_cnt,
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
      status,
      description,
      activate_cnt,
      user_id,
    })
    return res.json(rule)
  }
  async getAll(req, res) {
    const rules = await Rule.findAll()
    return res.json(rules)
  }
  async getOne(req, res) {}
  async updete(req, res) {}
  async delete(req, res) {}
}

module.exports = new RuleController()
