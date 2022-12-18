const Router = require('express')
const basketController = require('../controllers/basketController')
const router = new Router()


router.post('/', basketController.create)
router.get('/:id', basketController.getOne)
router.post('/item/:id', basketController.addItem)


module.exports = router