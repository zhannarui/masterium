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
        let {itemId} = req.query
        let colors;
        if(!itemId){
            colors = await Colors.findAll()
        }
        if(itemId == 1){
            colors = await Colors.findAll({where: {itemId: 1}})
        }
        if(itemId == 2){
            colors = await Colors.findAll({where: {itemId: 2}})
        }
        if(itemId == 3){
            colors = await Colors.findAll({where: {itemId: 3}})
        }
        if(itemId == 4){
            colors = await Colors.findAll({where: {itemId: 4}})
        }
        if(itemId == 5){
            colors = await Colors.findAll({where: {itemId: 5}})
        }
        if(itemId == 6){
            colors = await Colors.findAll({where: {itemId: 6}})
        }
        return res.json(colors)
    }
}

module.exports = new ColorController()