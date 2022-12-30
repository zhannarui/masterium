const ApiError = require("../error/ApiError");
const { Order, OrderItem, Basket, OrderItemProduct, BasketItem, Item, Colors } = require("../models/models");

class OrderController{
    async createOrderItem(req, res, next){
        const {userId} = req.params
        const {name, surname, email, address, phone, items, total_price} = req.body

        if (!userId){
            return next(ApiError.badRequest('некорректный id'))
        }

        const orders = await Order.findOne({where: { userId: userId}})

        if(!orders){
            return next(ApiError.badRequest('заказы этого пользователя не найдены'))
        } 

        const order = await OrderItem.create({orderId: orders.id, name, surname,
            email, address, phone, total_price })

        const basket = await Basket.findOne({where: { userId: userId }})

        if (items){
            for (const i of items) {
                await OrderItemProduct.create({
                    orderItemId: order.id,
                    itemId: i.itemId,
                    count: i.count,
                    colorKey: i.colorKey
                })

                await BasketItem.destroy({ where: {basketId: basket.id, itemId: i.itemId }})
            }
        }

        const result = await OrderItem.findOne({
            where: {id: order.id},
            include: [{
                model: OrderItemProduct,
                include: [{ model: Item }],
                order:
                    [['createdAt', 'ASC']]
            }],
        })
        return res.json(result)
    }

    async getAllByUserId(req, res, next){
        const {userId} = req.params

        if (!userId){
            return next(ApiError.badRequest('некорректный id'))
        }

        const order = await Order.findOne({where: { userId: userId }})

        if(!order){
            return next(ApiError.badRequest('заказы этого пользователя не найдены'))
        }

        const orderItems = await OrderItem.findAll({
            where: {orderId: order.id},
            include: [{
                model: OrderItemProduct,
                include: [{
                    model: Item,
                }, { model: Colors}],
                order:
                    [['createdAt', 'ASC']]
            }],

            order:
                [['createdAt', 'ASC']]
        })
        if (!orderItems){
            return next(ApiError.badRequest('заказы не найдены'))
        }
        return res.json(orderItems)
    }

    async getOneOrder(req, res, next){
        const {id} = req.params

        if (!id){
            return next(ApiError.badRequest('некорректный id'))
        }

        const order = await OrderItem.findOne({
            where: {id},
            include: [{
                model: OrderItemProduct,
                include: [{ model: Item }],
                order:
                    [['createdAt', 'ASC']]
            }],
        })

        return res.json(order)
    }
}

module.exports = new OrderController()