const Router = require('express')
const router = new Router()
const adminChangeNoteController = require('../../controllers/admin/adminChangeNoteController')

router.get('/:id', adminChangeNoteController.show)
router.get('/', adminChangeNoteController.index)
router.put('/:id', adminChangeNoteController.update)
router.delete('/:id', adminChangeNoteController.delete)

module.exports = router
