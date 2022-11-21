import React from "react";
import s from './BasketPage.module.css'
import Header from "../../components/Header/Header";
import basket from "../../store/basket";
import { NavLink } from "react-router-dom";
import BasketItem from "../../components/BasketItem/BasketItem";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const BasketPage = observer(() => {
  useEffect(() => {
    document.title = "Корзина | Masterium"
    window.scrollTo(0, 0);
}, [])
    return(
        <div>
            <Header/>
            <div className={s.basketPageBox}>
                <h1 className={s.basketPageBoxTitle}>Моя корзина</h1>
                {
          basket.basketArray < 1 
          ? 
          <div className={s.nullBox}>
          <p>У вас нет товаров в корзине</p>
          <NavLink className={s.nullBoxLink} to='/'>Перейти в каталог</NavLink>
          </div>
          :
          <div>
            <div className={s.clearButton}>
              <button onClick={() => basket.clearAll()}>Очистить всё</button>
            </div>
             <BasketItem/>
             <div className={s.totalPrice}>
              <b>Сумма: </b>
              {basket.totalPrice} руб.
             </div>
          </div>
        }
            </div>
        </div>

    )
})

export default BasketPage;