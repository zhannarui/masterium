import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import basket from "../../store/basket";
import s from './BasketItem.module.css'

const BasketItem = observer(() => {
    return (
        <div className={s.container}>
        <div className={s.itemsBox}>
            {basket.basketArray.map(b =>
            <a className={s.itemLink}>
            <div className={s.item}>
              <NavLink to={'/ProductPage/' + b.id}><img className={s.itemImg} src={require(`../../img/${b.img}`)}></img></NavLink>
               <p className={s.itemTitle}>{b.title} ({b.color})</p>
               <p className={s.itemPrice}>{b.price} <span>руб.</span></p>
               <div className={s.counter}>
                    <button className={s.minus} onClick={() => {
                        basket.decrement(b.id)
                    }}>-</button>
                    <p className={s.amount}>{b.count}</p>
                    <button className={s.plus} onClick={() => basket.increment(b.id)}>+</button>
                </div>
                <div>
                    <p className={s.itemPrice}>{b.totalPrice} <span>руб.</span></p>
                </div>
            </div>
            <div className={s.deleteFromBasket} onClick={() => basket.removeFromBasket(b.id)}>
               <svg className={s.crossIcon} width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_11_361)">
                    <path d="M32 1.88533L30.1147 0L16 14.1147L1.88533 0L0 1.88533L14.1147 16L0 30.1147L1.88533 32L16 17.8853L30.1147 32L32 30.1147L17.8853 16L32 1.88533Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_11_361">
                    <rect width="32" height="32" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
               </div>   
            </a>
            )}
        </div>
        </div>
    )
})

export default BasketItem;