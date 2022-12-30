const ApiError = require("../error/ApiError");
const { Favorites, FavoritesItem } = require("../models/models");

class FavoriteController {
  async create(req, res, next) {
    let { userId, favoriteItem } = req.body;
    if (!userId || !Number(userId)) {
      return next(ApiError.badRequest("Некорректный id пользователя"));
    }

    const favorite = await Favorites.create({ userId });

    console.log(favoriteItem);
    if (favoriteItem) {
      favoriteItem.forEach((i) =>
        FavoritesItem.create({
          favoriteId: favorite.id,
          itemId: i.itemId,
        })
      );
    }
    return res.json(favorite);
  }

  async getOne(req, res, next) {
    let { id } = req.params;
    if (!Number(id)) {
      return next(ApiError.badRequest("Некорректный id"));
    }
    const favorite = await Favorites.findOne({
      where: { id },
      include: [
        {
          model: FavoritesItem,
        },
      ],
    });
    if(!favorite){
        return next(ApiError.badRequest('Избранное не найдено'))
    }
    return res.json(favorite)
  }

  async delete(req, res, next) {
    let {id} = req.params
        if (!Number(id)){
            return next(ApiError.badRequest('Некорректный id'))
        }
        await FavoritesItem.destroy({where: {favoriteId: id}})

        await Favorites.destroy({where: {id}})
  }

  async addItem(req, res, next) {
    const {userId, itemId} = req.params

        if (!userId || !itemId ){
            return next(ApiError.badRequest('Некорректный id'))
        }

        const favorite = await Favorites.findOne({ where: { userId: userId }})
        if (!favorite){
            return next(ApiError.badRequest('нет избранных'))
        }

        let favoriteItem = await FavoritesItem.findOne({
            where: {
                favoriteId: favorite.id,
                itemId: itemId,
            }
        })

        if (!favoriteItem){
            favoriteItem = await FavoritesItem.create({
                favoriteId: favorite.id,
                itemId: itemId,
            })}

        return res.json(favoriteItem)
  }
  async deleteItem(req,res,next) {
    const {userId, itemId} = req.params
        if (!userId || !itemId){
            return next(ApiError.badRequest('Некорректный id'))
        }

        const favorite = await Favorites.findOne({ where: {userId: userId} })
        if (!favorite){
            return next(ApiError.badRequest('товара нет в избранных'))
        }
        await FavoritesItem.destroy({where: {favoriteId: favorite.id, itemId: itemId}})

        return res.json(true)
  }
}

module.exports = new FavoriteController();
