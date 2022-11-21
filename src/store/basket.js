import {makeAutoObservable} from 'mobx'


class Basket {
    basketArray = [];
    totalPrice = 0
    constructor(){
        makeAutoObservable(this)
    }
    calcTotalPrice = (basketArray) => {
        return basketArray.reduce((sum, item) => item.price * item.count + sum, 0);
    }

    // addToBasket(item){
    //     const findItem = this.basketArray.find((obj => obj.id === item.id))
    //     if (findItem){
    //         findItem.count = findItem.count + item.count
    //         findItem.totalPrice = findItem.count * findItem.price
    //     } else {
    //         this.basketArray.push({
    //             ...item,
    //             count: item.count,
    //             totalPrice: item.price * item.count,
    //         }
    //         )}
    //     this.totalPrice = this.calcTotalPrice(this.basketArray)
    // }
    addToBasket(item){
        const findItem = this.basketArray.find((obj => obj.color === item.color))
        if (findItem){
            findItem.count = findItem.count + item.count
            findItem.totalPrice = findItem.count * findItem.price
        } else {
            this.basketArray.push({
                ...item,
                count: item.count,
                totalPrice: item.price * item.count,
            }
            )}
        this.totalPrice = this.calcTotalPrice(this.basketArray)
    }
    removeFromBasket(id) {
        this.basketArray = this.basketArray.filter(item => item.id !== id)
        this.totalPrice = this.calcTotalPrice(this.basketArray)
    }
    clearAll(){
        this.basketArray = []
        this.totalPrice = this.calcTotalPrice(this.basketArray)
    }
    increment(id){
        const findItem = this.basketArray.find(item => item.id === id)
        if (findItem) {
            findItem.count++
        }
        findItem.totalPrice = findItem.price * findItem.count
        this.totalPrice = this.calcTotalPrice(this.basketArray)
    }
    decrement(id){
        const findItem = this.basketArray.find(item => item.id === id)
        if (findItem) {
            if (findItem.count > 1)
                findItem.count--
        }
        findItem.totalPrice = findItem.price * findItem.count
        this.totalPrice = this.calcTotalPrice(this.basketArray)
    }
}
export default new Basket()