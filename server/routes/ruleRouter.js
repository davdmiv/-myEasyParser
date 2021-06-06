const Router = require('express')
const router = new Router()
const roleMiddleware = require('../middleware/roleMiddleware')
const ruleController = require('../controllers/ruleController')

router.get('/public/:id', ruleController.showPublic)
router.get('/public', ruleController.indexPublic)

router.get('/:id', roleMiddleware(['USER', 'ADMIN']), ruleController.show)
router.get('/', roleMiddleware(['USER', 'ADMIN']), ruleController.index)
router.post('/', roleMiddleware(['USER', 'ADMIN']), ruleController.create)
router.put('/:id', roleMiddleware(['USER', 'ADMIN']), ruleController.update)
router.delete('/:id', roleMiddleware(['USER', 'ADMIN']), ruleController.delete)

module.exports = router
