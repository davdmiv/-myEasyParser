const { UserRule } = require('../db/models/index')
class UserRuleController {
  async create(req, res) {
    const { rule_id, user_id, privilege_id } = req.body
    const userRule = await UserRule.create({
      rule_id,
      user_id,
      privilege_id,
    })
    return res.json(userRule)
  }
  async getAll(req, res) {
    const userRule = await UserRule.findAll()
    return res.json(userRule)
  }
  async getOne(req, res) {
    const { user_id, rule_id } = req.query
    const userRule = await UserRule.findOne({ user_id, rule_id })
    return res.json(userRule)
  }
  async updete(req, res) {}
  async delete(req, res) {}
}

module.exports = new UserRuleController()
