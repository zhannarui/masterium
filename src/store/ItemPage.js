import {makeAutoObservable} from 'mobx'


class ItemPage {
    chosenProduct = []
    constructor(){
        makeAutoObservable(this)
    }

    setChosenProduct(item){
        this.chosenProduct.push(item)
    }

}
export default new ItemPage()