const ApiError = require("../error/ApiError")
const { Basket, BasketItem } = require("../models/models")

class BasketController{
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
}

module.exports = new BasketController()