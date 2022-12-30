import { makeAutoObservable, observable } from "mobx";
import { toJS } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._favorite = [];
    this._basket = [];
    this._orders = [];
    this._totalPrice = 0;
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._user = user;
  }

  setBasket(basket) {
    this._basket = [basket, ...this._basket];
    console.log("wtyf", this._totalPrice);
    this._totalPrice = null;
    this._basket.map((item) => {
      console.log("count", item.item_count);
      console.log("price", item.itemInfo.price);
      this._totalPrice += item.item_count * item.itemInfo.price;
      console.log("total", this._totalPrice);
    });
    console.log(this._basket);
    console.log("цена", this._totalPrice);
  }

  deleteItemFromBasket(id) {
    this._basket = this._basket.filter((item) => item.itemInfo.id !== id);
    let item = this._basket.find((item) => item.itemInfo.id !== id);
    this._totalPrice -= item.item_count * item.itemInfo.price;
  }

  setToFavorite(favorite) {
    const test = toJS(favorite);
    this._favorite.push(test);
    console.log("test3", test);
  }

  deleteItemFromFav(id) {
    this._favorite = this._favorite.filter((item) => item.itemId !== id);
  }
  cleanFav() {
    this._favorite = [];
  }

  cleanBasket() {
    this._basket = [];
  }

  setOrders(orders) {
    this._orders = orders;
  }

  cleanOrders() {
    this._orders = [];
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }

  get favorite() {
    return this._favorite;
  }

  get basket() {
    return this._basket;
  }

  get totalPrice() {
    return this._totalPrice;
  }

  get orders() {
    return this._orders;
  }
}
