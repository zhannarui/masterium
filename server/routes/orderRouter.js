const Router = require('express')
const orderController = require('../controllers/orderController')
const router = new Router()


router.post('/user/:userId', orderController.createOrderItem)
router.get('/user/:userId', orderController.getAllByUserId)
router.get('/order/:id', orderController.getOneOrder)



module.exports = router