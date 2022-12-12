import React from "react";
import s from './ContactPage.module.css'
import phoneIcon from '../../img/phone.svg'
import mailIcon from '../../img/mail.svg'
import telegramIcon from '../../img/telegram.svg'
import whatsAppIcon from '../../img/WhatsApp.svg'
import mainImg from '../../img/contacts-img.png'
import BottomNavbar from "../../components/BottomNavBar/BottomNavbar";

const ContactPage = () => {
    return (
        <div>
        <div className={s.content}>
            <div className={s.text__block}>
                <div className={s.title}>
                <h1>Дорогой клиент!</h1>
                <h3>Нужна помощь? Мы счастливы ответить на Ваши вопросы</h3>
                </div>
                <div className={s.item}>
                    <p className={s.item__title}>по телефону</p>
                    <div className={s.item__textBox}>
                        <img src={phoneIcon} alt="" />
                        <a href="tel:+79215557615">+7 (921) 555-76-15 с 10:00 до 18:00 ежедневно;</a>
                    </div>
                </div>
                <div className={s.item}>
                    <p className={s.item__title}>в WhatsApp</p>
                    <div className={s.item__textBox}>
                        <img src={whatsAppIcon} alt="" />
                        <a href="tel:+79215557615">+7 (921) 555-76-15;</a>
                    </div>
                </div>
                <div className={s.item}>
                    <p className={s.item__title}>в Telegram</p>
                    <div className={s.item__textBox}>
                        <img src={telegramIcon} alt="" />
                        <a href="tel:+79215557615">masterium;</a>
                    </div>
                </div>
                <div className={s.item}>
                    <p className={s.item__title}>по электронной почте</p>
                    <div className={s.item__textBox}>
                        <img src={phoneIcon} alt="" />
                        <a href="mailto:orders@masterium.ru">orders@masterium.ru.</a>
                    </div>
                </div>
            </div>
            <div className={s.img__block}>
                <img src={mainImg} alt="" />
            </div>

        </div>
        <div className={s.bottomNavbar}>
                <BottomNavbar/>
            </div>
        </div>
    )
}

export default ContactPage