import React from 'react';
import Header from '../../components/Header/Header';
import s from './Delivery.module.css';
import { useEffect } from "react";

const Delivery = () => {
    useEffect(() => {
        document.title = "Доставка | Masterium"
        window.scrollTo(0, 0);
    }, [])
    return(
        <div>
            <Header/>
        <div className={s.deliveryContent}>
            <div className={s.infoBox}>
                <h1 className={s.boxTitle}>Как оплатить заказ</h1>
                <div className={s.textBox}>
                    <p className={s.textBoxItem}>Мы отправляем игрушки <span>Masterium</span> только после полной оплаты заказа банковской картой на сайте. Мы сделали это, чтобы избежать расходов по невыкупленным заказам:</p>
                    <p className={s.textBoxItem}>– оплата курьера по доставке и возврату заказов;</p>
                    <p className={s.textBoxItem}>– списание использованной упаковки;</p>
                    <p className={s.textBoxItem}>– потраченное время сотрудников.</p>
                    <p className={s.textBoxItem}>Отсутствие невыкупленных заказов позволяет нам не включать вышеуказанные издержки в стоимость украшений и не повышать розничные цены. Мы надеемся, что Вы поддержите нашу позицию и поймете ее.</p>
                </div>
            </div>
            <div className={s.infoBox}>
            <h1 className={s.boxTitle}>Доставка заказа и ее стоимость</h1>
            <div className={s.textBox}>
                    <p className={s.textBoxItem}>Доставка заказов осуществляется компанией СДЕК (курьер и пункты выдачи заказов).</p>
                    <p className={s.textBoxItem}>Стоимость доставки рассчитывается автоматически с официального сайта компании СДЕК без каких-либо сторонних комиссий.</p>
                    <p className={s.textBoxItem}>Если сумма заказа больше или равна 5000 рублей, мы бесплатно отправим Ваш заказ Почтой России или доставим до ближайшего пункта выдачи заказов СДЕК.</p>
                    <p className={s.textBoxItem}>Номер отслеживания будет отправлен Вам на почту после обработки вашего заказа.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Delivery;