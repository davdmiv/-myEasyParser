const { ChangeNote } = require('../../db/models/index')

class AdminChangeNoteController {
  async show(req, res) {
    const { id } = req.params
    const changeNote = await ChangeNote.findByPk({ id })
    return res.json(changeNote)
  }

  async index(req, res) {
    const changeNotes = await ChangeNote.findAll()
    return res.json(changeNotes)
  }

  async update(req, res) {
    const { id, user_note } = req.params
    const changeNote = await ChangeNote.update({ id, user_note })
    return res.json(changeNote)
  }

  async delete(req, res) {
    const { id } = req.params
    const changeNote = await ChangeNote.destroy({ where: { id } })
    return res.json(changeNote)
  }
}

module.exports = new AdminChangeNoteController()
