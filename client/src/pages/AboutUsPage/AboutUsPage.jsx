import React from "react";
import s from './AboutUsPage.module.css'
import img from '../../img/aboutUs-img.png'


const AboutUsPage = () => {
    return (
        <div className={s.content}>
            <div className={s.text__box}>
                <p className={s.item}><span>Masterium</span> - это развивающие игрушки, сделанные с душой.</p>
                <p className={s.item}>Наше комьюнити мастеров, решило создавать своими руками товары, которые помогли бы детям развить свою мелкую моторику, восприятие цветов, форм, разных материалов. Все это без какого-либо вреда для здоровья, так как наши мастера ответсвенно подходят к выбору материалов и созданию продукта.</p>
                <p className={s.item}>В нашем магазине вы можете не только выбрать понравившуюся вам игрушку, но и персонализировать ее, выбрав цвет и гравировку.</p>
            </div>
            <div className={s.img}>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default AboutUsPage