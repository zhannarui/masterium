const {Colors} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class ColorController{
    async create (req, res, next) {
        try {
            const {itemId, name} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const colors = await Colors.create({itemId, name, img: fileName})
            return res.json(colors)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
      
    }

    async getAll (req, res) {
        const colors = await Colors.findAll()
        return res.json(colors)
    }
}

module.exports = new ColorController()