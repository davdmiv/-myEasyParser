const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const ruleRouter = require('./ruleRouter')
const changenoteRouter = require('./changenoteRouter')

router.use('/user', userRouter)
router.use('/rule', ruleRouter)
router.use('/changenote', changenoteRouter)

module.exports = router
