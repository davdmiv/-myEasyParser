const Router = require('express')
const router = new Router()
const ruleController = require('../controllers/ruleController')

router.post('/', ruleController.create)
router.get('/', ruleController.getAll)
router.get('/:id', ruleController.getOne)
router.put('/:id', ruleController.updete)
router.delete('/:id', ruleController.delete)

module.exports = router
