const { ChangeNote } = require('../db/models/index')
class ChangenoteController {
  async create(req, res) {
    const { screenshot_attachment, html_attachment, check_datetime, rule_id } =
      req.body
    const changenote = await ChangeNote.create({
      screenshot_attachment,
      html_attachment,
      check_datetime,
      rule_id,
    })
    return res.json(changenote)
  }
  async getAll(req, res) {
    const changenotes = await ChangeNote.findAll()
    return res.json(changenotes)
  }
  async getOne(req, res) {
    const { id } = req.query
    const changenote = await ChangeNote.findOne({ id })
    return res.json(changenote)
  }
  async updete(req, res) {}
  async delete(req, res) {}
}

module.exports = new ChangenoteController()
