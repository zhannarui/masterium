const Router = require('express')
const favoriteController = require('../controllers/favoriteController')
const router = new Router()


router.post('/', favoriteController.create)
router.get('/:id', favoriteController.getOne)
router.delete('/:id', favoriteController.delete)
router.put('/user/:userId/add/:itemId', favoriteController.addItem)
router.put('/user/:userId/delete/:itemId', favoriteController.deleteItem)



module.exports = router