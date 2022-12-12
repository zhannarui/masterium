const Router = require('express')
const basketController = require('../controllers/basketController')
const router = new Router()


router.post('/', basketController.create)
router.get('/:id', basketController.getOne)

module.exports = router