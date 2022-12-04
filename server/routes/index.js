const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const itemRouter = require('./itemRouter')
const categoryRouter = require('./categoryRouter')
const colorRouter = require('./colorRouter')


router.use('/user', userRouter)
router.use('/item', itemRouter)
router.use('/category', categoryRouter)
router.use('/color', colorRouter)

module.exports = router