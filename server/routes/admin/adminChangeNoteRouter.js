const Router = require('express')
const router = new Router()
const roleMiddleware = require('../middleware/roleMiddleware')
const changeNoteController = require('../controllers/changeNoteController')

router.get('/:id', changeNoteController.show)
router.get('/', changeNoteController.index)
router.put('/:id', changeNoteController.updete)
router.delete('/:id', changeNoteController.delete)

module.exports = router
