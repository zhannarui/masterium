import React from 'react';
import Header from '../../components/Header/Header';
import s from './AboutUs.module.css'
import photo from '../../img/aboutUs-img.png'
import { useEffect } from "react";
import BottomNavbar from '../../BottomNavBar/BottomNavbar';
const AboutUs = () => {
    useEffect(() => {
        document.title = "О нас | Masterium"
        window.scrollTo(0, 0);
    }, [])
    return(
        <div>
        <Header/>
        <div className={s.aboutUsContent}>
            <div className={s.contentTextBox}>
                <p className={s.textBoxItem}><span>Masterium</span> - это развивающие игрушки, сделанные с душой.</p>
                <p className={s.textBoxItem}>Наше комьюнити мастеров, решило создавать своими руками товары, которые помогли бы детям развить свою мелкую моторику, восприятие цветов, форм, разных материалов. Все это без какого-либо вреда для здоровья, так как наши мастера ответсвенно подходят к выбору материалов и созданию продукта.</p>
                <p className={s.textBoxItem}>В нашем магазине вы можете не только выбрать понравившуюся вам игрушку, но и персонализировать ее, выбрав цвет и гравировку.</p>
            </div>
            <div className={s.contentImg}>
                <img src={ photo } alt="" />
            </div>
        </div>
        <div className='bottomNavbar'>
            <BottomNavbar/>
        </div>
        </div>
    )
}

export default AboutUs;