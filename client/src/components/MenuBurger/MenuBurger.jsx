import React from "react";
import { NavLink } from "react-router-dom";
import s from './MenuBurger.module.css'
import logo from '../../img/logo.svg'

const MenuBurger = (props) =>{
    return(
        
        <div className={props.menuActive ? `${s.menuu} ${s.active__menu}` : s.menuu}
        onClick={() => props.setMenuActive(false)}>
            <div className={s.menu__content} onClick={e => e.stopPropagation()}>
                <ul>
                    <li><NavLink onClick={() => {
                        props.setMenuActive(!props.menuActive)
                    }} to='/'>Каталог</NavLink></li>
                    <li><NavLink onClick={() => {
                            props.setMenuActive(!props.menuActive)
                    }} to='/Contact'>Контакты</NavLink></li>
                    <li><NavLink onClick={() => {
                        props.setMenuActive(!props.menuActive)
                    }} to='/AboutUs'>О нас</NavLink></li>
                    <li><NavLink onClick={() => {
                         props.setMenuActive(!props.menuActive)
                    }} to='/Delivery'>Доставка</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuBurger