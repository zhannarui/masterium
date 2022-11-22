import React from "react";
import ContactItems from "../components/ContactItems";
import Header from "../components/Header/Header";
import photo from '../img/contacts-img.png'
import { useEffect } from "react";
import BottomNavbar from "../BottomNavBar/BottomNavbar";

const ContactPage = (props) => {
    useEffect(() => {
        document.title = "Контакты | Masterium"
        window.scrollTo(0, 0);
    }, [])
    return(
        <div>
        <Header/>
        <div className="contactPage-content">
            <div className="content__text-block">
                <div className="text__block-title">
                <h1>Дорогой клиент!</h1>
                <h3>Нужна помощь? Мы счастливы ответить на Ваши вопросы</h3>
                </div>
                <ContactItems contacts={props.state.contacts}/>
            </div>
            
            <div className="content__img-block">
             <img src={ photo } alt="" />   
            </div>
        </div>
        <div className='bottomNavbar'>
            <BottomNavbar/>
        </div>
        </div>
    )
}

export default ContactPage;