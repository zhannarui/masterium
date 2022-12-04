const { Item, Colors } = require("../models/models")
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const { findSourceMap } = require("module")

class ItemController{
    async create (req, res, next) {
        try{
        let {title, price, categoryId, description} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const item = await Item.create({title, price, categoryId, description, img: fileName})
        return res.json(item)

        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
        
    }

    async getAll (req, res) {
        let {categoryId} = req.query 
        let items;
        if(!categoryId){
            items = await Item.findAll()
        }
        if(categoryId){
            items = await Item.findAll({where: {categoryId}})
        }
        return res.json(items)
    }

    async getOne (req, res) {
        const {id} = req.params
        const item = await Item.findOne(
            {where: {id}}
        )
        return res.json(item)
    }

    async delete(req, res, next){
        const {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        await Item.destroy({where: {id}})
    }
}

module.exports = new ItemController()