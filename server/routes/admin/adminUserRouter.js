const Router = require('express')
const router = new Router()

const adminUserController = require('../../controllers/admin/adminUserController')
const roleMiddleware = require('../../middleware/roleMiddleware')

router.get('/:id', roleMiddleware(['ADMIN']), adminUserController.show)
router.get('/', roleMiddleware(['ADMIN']), adminUserController.index)
router.post('/', roleMiddleware(['ADMIN']), adminUserController.create)
router.put('/', roleMiddleware(['ADMIN']), adminUserController.update)
router.delete('/:id', roleMiddleware(['ADMIN']), adminUserController.delete)

module.exports = router
