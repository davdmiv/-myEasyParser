const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)

router.get('/:id', roleMiddleware(['USER', 'ADMIN']), userController.show)
router.put('/', roleMiddleware(['USER', 'ADMIN']), userController.update)
router.delete('/:id', roleMiddleware(['USER', 'ADMIN']), userController.delete)

module.exports = router
