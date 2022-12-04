import {makeAutoObservable} from 'mobx'

export default class ProductStore{
    constructor(){
        this._categories = []
        this._items = []
        this._selectedCategory = {}
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