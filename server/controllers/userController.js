const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket, Favorites} = require('../models/models')

const generateJwt = (id, email, name, surname) => {
  return jwt.sign(
    {id, email, name, surname}, 
    process.env.SECRET_KEY,
    {expiresIn:'24h'}
    )

}

class UserController{
    async registration (req, res, next) {
      const {email, password, name, surname} = req.body 
      if(!email || !password){
        return next(ApiError.badRequest('Некорректный email или password'))
      }
      const candidate = await User.findOne({where: {email}})
      if(candidate){
        return next(ApiError.badRequest('Пользователь с таким email уже существует'))
      }
      const hashPassword = await bcrypt.hash(password, 5)
      const user = await User.create({email, name, surname, password, password: hashPassword})
      const basket = await Basket.create({userId: user.id})
      const favorites = await Favorites.create({userId: user.id})
      const token = generateJwt(user.id, user.email, user.name, user.surname)
      return res.json({token})
    }

    async login (req, res, next) {
      const {email, password} = req.body 
      const user = await User.findOne({where: {email}})
      if (!user){
        return next(ApiError.internal('Пользователь не найден'))
      }
      let comparePassword = bcrypt.compareSync(password, user.password)
      if(!comparePassword){
        return next(ApiError.internal('Указан неверный пароль'))
      }
      const token = generateJwt(user.id, user.email, user.name, user.password)
      return res.json({token})
    }

    async check (req, res, next) {
     const token = generateJwt(req.user.id, req.user.email, req.user.name, req.user.surname)
     return res.json({token})
    }
}

module.exports = new UserController()