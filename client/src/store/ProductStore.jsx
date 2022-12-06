import {makeAutoObservable} from 'mobx'

export default class ProductStore{
    constructor(){
        this._categories = []
        this._items = []
        this._selectedCategory = {}
        this.__colors = []
        makeAutoObservable(this)
    }

    setCategories(categories){
        this._categories = categories
    }

    setItems(items){
        this._items = items
    }

    setSelectedCategory(category){
        this._selectedCategory = category
    }

    setColors(color) {
        this.__colors = color
    }

    get colors (){
        return this.__colors
    }

    get categories(){
        return this._categories
    }

    get items(){
        return this._items
    }

    get selectedCategory(){
        return this._selectedCategory
    }

}