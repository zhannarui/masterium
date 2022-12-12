import React from "react";
import { NavLink } from "react-router-dom";
import s from './MenuBurger.module.css'
import logo from '../../img/logo.svg'
import { ABOUTUSPAGE_ROUTER, CONTACTPAGE_ROUTER, DELIVERYPAGE_ROUTER, HOME_ROUTER } from "../../utils/consts";

const MenuBurger = (props) =>{
    return(
        
        <div className={props.menuActive ? `${s.menuu} ${s.active__menu}` : s.menuu}
        onClick={() => props.setMenuActive(false)}>
            <div className={s.menu__content} onClick={e => e.stopPropagation()}>
                <ul>
                    <li><NavLink onClick={() => {
                        props.setMenuActive(!props.menuActive)
                    }} to={HOME_ROUTER}>Каталог</NavLink></li>
                    <li><NavLink onClick={() => {
                            props.setMenuActive(!props.menuActive)
                    }} to={CONTACTPAGE_ROUTER}>Контакты</NavLink></li>
                    <li><NavLink onClick={() => {
                        props.setMenuActive(!props.menuActive)
                    }} to={ABOUTUSPAGE_ROUTER}>О нас</NavLink></li>
                    <li><NavLink onClick={() => {
                         props.setMenuActive(!props.menuActive)
                    }} to={DELIVERYPAGE_ROUTER}>Доставка</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuBurger