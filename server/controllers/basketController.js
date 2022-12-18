const ApiError = require("../error/ApiError")
const { Basket, BasketItem } = require("../models/models")

class BasketController{
    //какая-то фигня а не код)
    async create (req, res){
        const {userId, basketItems} = req.body
        if (!userId || !Number(userId)){
            return next(ApiError.badRequest('Некорректный id пользователя'))
        }
        const basket = await Basket.create({userId})
        if(basketItems){
            basketItems.forEach(i => 
                BasketItem.create({
                    basketId: basket.id,
                    itemId: i.itemId,
                    item_count: i.item_count
                })
                )
        }
        return res.json(basket)
    }

    async getOne (req, res){
        let {id} = req.params 
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        const basket = await Basket.findOne({
            where: {id},
            include: [{
                model: BasketItem,
            }]
        })
        if (!basket){
            return next(ApiError.badRequest('корзина не найдена'))
        }
        return res.json(basket)
    }

    async addItem(req, res){
        const id = req.params
        if(!id || Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        const {itemId, item_count} = req.body
        const item = BasketItem.create({
            basketId: id,
            itemId: itemId,
            item_count: item_count
        })
        if(!item){
            return next(ApiError.badRequest('Товар не создан'))
        }
        return res.json(item)
    }
}

module.exports = new BasketController()