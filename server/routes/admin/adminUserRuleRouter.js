const Router = require('express')
const router = new Router()
const adminUserRuleController = require('../../controllers/admin/adminUserRuleController')

router.get('/', adminUserRuleController.index)
router.post('/', adminUserRuleController.create)
router.put('/:id', adminUserRuleController.update)
router.delete('/:id', adminUserRuleController.delete)

module.exports = router
