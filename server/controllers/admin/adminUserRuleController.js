const { UserRule } = require('../../db/models/index')

class AdminUserRuleController {
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
  async update(req, res) {
    const { rule_id, user_id, privilege_id } = req.body
    const userRule = await UserRule.update({ rule_id, user_id, privilege_id })
    return res.json(userRule)
  }
  async delete(req, res) {
    const { rule_id, user_id } = req.query
    const userRule = await UserRule.destroy({ where: { rule_id, user_id } })
    return res.json({ userRule })
  }
}

module.exports = new AdminUserRuleController()
