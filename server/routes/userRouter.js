const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)

router.get('/:id', roleMiddleware(['USER', 'ADMIN']), userController.show)
router.get('/', roleMiddleware(['ADMIN']), userController.index)
router.post('/', roleMiddleware(['ADMIN']), userController.create)
router.put('/', roleMiddleware(['ADMIN']), userController.update)
router.delete('/:id', roleMiddleware(['ADMIN']), userController.delete)

module.exports = router
