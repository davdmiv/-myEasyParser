const Router = require('express')
const router = new Router()
const changenoteController = require('../controllers/changenoteController')
router.post('/', changenoteController.create)
router.get('/', changenoteController.getAll)
router.get('/:id', changenoteController.getOne)
router.put('/:id', changenoteController.updete)
router.delete('/:id', changenoteController.delete)

module.exports = router
