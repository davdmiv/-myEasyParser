const Router = require('express')
const router = new Router()
const roleMiddleware = require('../middleware/roleMiddleware')
const changeNoteController = require('../controllers/changeNoteController')

router.get('/public/:id', changeNoteController.showPublic)
router.get('/:id', roleMiddleware(['USER', 'ADMIN']), changeNoteController.show)
router.get('/', roleMiddleware(['USER', 'ADMIN']), changeNoteController.index)
router.put(
  '/:id',
  roleMiddleware(['USER', 'ADMIN']),
  changeNoteController.update
)
router.delete(
  '/:id',
  roleMiddleware(['USER', 'ADMIN']),
  changeNoteController.delete
)

module.exports = router
