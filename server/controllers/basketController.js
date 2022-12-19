const ApiError = require("../error/ApiError")
const { Basket, BasketItem, Colors } = require("../models/models")

class BasketController{
    async create (req, res, next){
        const {userId, basketItems} = req.body
        if (!userId || !Number(userId)){
            return next(ApiError.badRequest('Некорректный id пользователя'))
        }
        const basket = await Basket.create({userId})
        if(basketItems){
            for(const i of basketItems){
                let colorObj = await Colors.findOne({
                    where: {name: i.color}
                })
                BasketItem.create({
                    basketId: basket.id,
                    itemId: i.itemId,
                    item_count: i.item_count,
                    colorid: colorObj.id
                })} 
        }
        return res.json(basket)
    }

    async getOne (req, res,next){
        let {id} = req.params 
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        const basket = await Basket.findOne({
            where: {userId: id},
            include: [{
                model: BasketItem,
            }]
        })
        if (!basket){
            return next(ApiError.badRequest('корзина не найдена'))
        }
        return res.json(basket)
    }

    async addItem(req, res, next){
        const {id} = req.params
        if (!id ){
            return next(ApiError.badRequest('Некорректный id'))
        }
        const {itemId, item_count} = req.body

        const basket = await Basket.findOne({where:{userId: id}, include: [{
                model: BasketItem,
            }]})
        if(!basket){
            return next(ApiError.badRequest('Корзины с таким id не существует'))
        }

        const itemExist = await BasketItem.findOne({
            where: {
                basketId: basket.id,
                itemId: itemId
            }
        })

        if(!itemExist){
            const item = await BasketItem.create({
                basketId: id,
                itemId: itemId,
                item_count: item_count
            })

            if (!item){
                return next(ApiError.badRequest('товар не создан'))
            }
        } else {
            itemExist.update({ item_count: item_count} )
        }
        return res.json(basket)
    }

    async deleteItem(req, res, next){
        const {basketId, itemId} = req.params
        if(!basketId || !itemId){
            return next(ApiError.badRequest('Некорректный id'))
        }
        await BasketItem.destroy({
            where: {
                basketId: basketId,
                itemId: itemId
            }
        })
        return res.json(true)
    }

    async delete(req, next){
        let {id} = req.params
        if(!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        await BasketItem.destroy({
            where: {
                basketId: id
            }
        })
        await Basket.destroy({where: {id}})
    }
}

module.exports = new BasketController()