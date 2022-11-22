import React from "react";
import { NavLink } from "react-router-dom";
import './MenuBurger.css'
import logo from '../../img/logo.svg'

const MenuBurger = (props) =>{
    return(
        
        <div className={props.menuActive ? 'menuu active_menu' : 'menuu'}
        onClick={() => props.setMenuActive(false)}>
            <div className="blur"></div>
            <div className='menu__content' onClick={e => e.stopPropagation()}>
            <div className='drop'>
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
        </div>
    )
}

export default MenuBurger