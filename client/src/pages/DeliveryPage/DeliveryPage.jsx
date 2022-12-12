import React from "react";
import BottomNavbar from "../../components/BottomNavBar/BottomNavbar";
import s from './DeliveryPage.module.css'

const DeliveryPage = () => {
    return (
        <div>
        <div className={s.content}>
            <div className={s.info__box}>
                <h1 className={s.title}>Как оплатить заказ</h1>
                <div className={s.text__box}>
                    <p className={s.item}>Мы отправляем игрушки <span>Masterium</span> только после полной оплаты заказа банковской картой на сайте. Мы сделали это, чтобы избежать расходов по невыкупленным заказам:</p>
                    <p className={s.item}>– оплата курьера по доставке и возврату заказов;</p>
                    <p className={s.item}>– списание использованной упаковки;</p>
                    <p className={s.item}>– потраченное время сотрудников.</p>
                    <p className={s.item}>Отсутствие невыкупленных заказов позволяет нам не включать вышеуказанные издержки в стоимость украшений и не повышать розничные цены. Мы надеемся, что Вы поддержите нашу позицию и поймете ее.</p>
                </div>
            </div>
            <div className={s.info__box}>
                <h1 className={s.title}>Доставка заказа и ее стоимость</h1>
                <div className={s.text__box}>
                    <p className={s.item}>Доставка заказов осуществляется компанией СДЕК (курьер и пункты выдачи заказов).</p>
                    <p className={s.item}>Стоимость доставки рассчитывается автоматически с официального сайта компании СДЕК без каких-либо сторонних комиссий.</p>
                    <p className={s.item}>Если сумма заказа больше или равна 5000 рублей, мы бесплатно отправим Ваш заказ Почтой России или доставим до ближайшего пункта выдачи заказов СДЕК.</p>
                    <p className={s.item}>Номер отслеживания будет отправлен Вам на почту после обработки вашего заказа.</p>
                </div>
            </div>
        </div>
        <div className={s.bottomNavbar}>
                <BottomNavbar/>
            </div>
        </div>
    )
}

export default DeliveryPage