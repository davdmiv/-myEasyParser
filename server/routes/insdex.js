const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const ruleRouter = require('./ruleRouter')
const changenoteRouter = require('./changenoteRouter')

router.use('/users', userRouter)
router.use('/rules', ruleRouter)
router.use('/changenotes', changenoteRouter)

module.exports = router
