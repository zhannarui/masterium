import {makeAutoObservable} from 'mobx'

class Favorites {
    favoritesArray = [] 
    constructor(){
        makeAutoObservable(this)
    }

    addFavoriteItem(item){
        this.favoritesArray.push(item)
    }
    removeFavoriteItem(id) {
        this.favoritesArray = this.favoritesArray.filter(item => item.id !== id)
        console.log(this.favoritesArray)
    }
    clearAll(){
        this.favoritesArray = []
    }
}
export default new Favorites()