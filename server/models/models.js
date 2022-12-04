const sequelize = require('../db')
const {DataTypes} = require("sequelize")

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING}
})

const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketItem = sequelize.define('basket_item',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    item_count: {type: DataTypes.INTEGER}
})

const  Favorites = sequelize.define('favorites',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const FavoritesItem = sequelize.define('favorites_item',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Item = sequelize.define('item',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    description: {type: DataTypes.TEXT('long'), allowNull: false}
})

const Category = sequelize.define('category',{
    id: {type: DataTypes.STRING, primaryKey: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Colors = sequelize.define('colors',{
    key: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasOne(Favorites)
Favorites.belongsTo(User)

Basket.hasMany(BasketItem)
BasketItem.belongsTo(Basket)

Favorites.hasMany(FavoritesItem)
FavoritesItem.belongsTo(Favorites)

Category.hasMany(Item)
Item.belongsTo(Category)

Item.hasMany(Colors)
Colors.belongsTo(Item)

Item.hasMany(BasketItem)
BasketItem.belongsTo(Item)

Item.hasMany(FavoritesItem)
FavoritesItem.belongsTo(Item)


module.exports = {
    User,
    Basket,
    BasketItem,
    Favorites,
    FavoritesItem,
    Item,
    Category,
    Colors
}