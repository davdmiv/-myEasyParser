const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const ruleRouter = require('./ruleRouter')
const adminRouter = require('./admin/adminRouter')
const changenoteRouter = require('./changeNoteRouter')
const roleMiddleware = require('../middleware/roleMiddleware')

router.use('/users', userRouter)
router.use('/rules', ruleRouter)
router.use('/changenotes', changenoteRouter)
router.use('/admin', roleMiddleware(['ADMIN']), adminRouter)

module.exports = router
