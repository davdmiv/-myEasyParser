const { UserRule } = require('../../db/models/index')
class AdminUserRuleController {
  async show(req, res) {
    const { user_id, rule_id } = req.query
    const userRule = await UserRule.findOne({ user_id, rule_id })
    return res.json(userRule)
  }
  async index(req, res) {
    const userRule = await UserRule.findAll()
    return res.json(userRule)
  }
  async create(req, res) {
    const { rule_id, user_id, privilege_id } = req.body
    const userRule = await UserRule.create({
      rule_id,
      user_id,
      privilege_id,
    })
    return res.json(userRule)
  }
  async updete(req, res) {}
  async delete(req, res) {}
}

module.exports = new AdminUserRuleController()
