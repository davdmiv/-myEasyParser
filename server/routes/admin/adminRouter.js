const Router = require('express')
const router = new Router()

const adminUserRouter = require('./adminUserRouter')
const adminRuleRouter = require('./adminRuleRouter')
const adminUserRuleRouter = require('./adminUserRuleRouter')
const adminChangeNoteRouter = require('./adminChangeNoteRouter')

router.use('/users', adminUserRouter)
router.use('/userrules', adminUserRuleRouter)
router.use('/rules', adminRuleRouter)
router.use('/changenotes', adminChangeNoteRouter)

module.exports = router
