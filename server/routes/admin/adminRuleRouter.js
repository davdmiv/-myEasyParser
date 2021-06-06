const Router = require('express')
const router = new Router()
const adminRuleController = require('../../controllers/admin/adminRuleController')

router.get('/:id', adminRuleController.show)
router.get('/', adminRuleController.index)
router.post('/', adminRuleController.create)
router.put('/:id', adminRuleController.update)
router.delete('/:id', adminRuleController.delete)

module.exports = router
