const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const itemRouter = require('./itemRouter')
const categoryRouter = require('./categoryRouter')
const colorRouter = require('./colorRouter')
const basketRouter = require('./basketRouter')
const favoriteRouter = require('./favoriteRouter')
const orderRouter = require('./orderRouter')


router.use('/user', userRouter)
router.use('/item', itemRouter)
router.use('/category', categoryRouter)
router.use('/color', colorRouter)
router.use('/basket', basketRouter)
router.use('/favorite', favoriteRouter)
router.use('/orders', orderRouter)

module.exports = router