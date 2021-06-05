const Router = require('express')
const router = new Router()
const roleMiddleware = require('../../middleware/roleMiddleware')
const adminUserRuleController = require('../../controllers/admin/adminUserRuleController')

router.get('/:id', roleMiddleware(['ADMIN']), adminUserRuleController.show)
router.get('/', roleMiddleware(['ADMIN']), adminUserRuleController.index)
router.post('/', roleMiddleware(['ADMIN']), adminUserRuleController.create)
router.put('/:id', roleMiddleware(['ADMIN']), adminUserRuleController.updete)
router.delete('/:id', roleMiddleware(['ADMIN']), adminUserRuleController.delete)

module.exports = router
