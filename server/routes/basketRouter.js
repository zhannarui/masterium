const Router = require('express')
const basketController = require('../controllers/basketController')
const router = new Router()


router.post('/', basketController.create)
router.get('/:id', basketController.getOne)
router.post('/item/:id', basketController.addItem)
router.put('/:basketId/delete/:itemId', basketController.deleteItem)
router.delete('/:id', basketController.delete)


module.exports = router