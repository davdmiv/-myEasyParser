const Router = require('express')
const router = new Router()
const adminUserController = require('../../controllers/admin/adminUserController')

router.get('/:id', adminUserController.show)
router.get('/', adminUserController.index)
router.post('/', adminUserController.create)
router.put('/:id', adminUserController.update)
router.delete('/:id', adminUserController.delete)

module.exports = router
