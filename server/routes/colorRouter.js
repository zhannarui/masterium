const Router = require('express')
const colorController = require('../controllers/colorController')
const router = new Router()

router.post('/', colorController.create)
router.get('/', colorController.getAll)


module.exports = router