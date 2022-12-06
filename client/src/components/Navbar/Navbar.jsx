import React from "react";
import { NavLink, useLocation } from 'react-router-dom'
import { ABOUTUSPAGE_ROUTER, CONTACTPAGE_ROUTER, DELIVERYPAGE_ROUTER, HOME_ROUTER } from "../../utils/consts";
import s from './Navbar.module.css'
const Navbar = () => {
    const  location = useLocation()
    const homeLocation = location.pathname === HOME_ROUTER
    const contactLocation = location.pathname === CONTACTPAGE_ROUTER
    const aboutUsLocation = location.pathname === ABOUTUSPAGE_ROUTER
    const deliveryLocation = location.pathname === DELIVERYPAGE_ROUTER
    return(
              <ul className={s.nav}>
              <li><NavLink to={HOME_ROUTER} className={homeLocation ? s.active : s.link}>Каталог</NavLink></li>
              <li><NavLink to={CONTACTPAGE_ROUTER} className={contactLocation ? s.active : s.link}>Контакты</NavLink></li>
              <li><NavLink to={ABOUTUSPAGE_ROUTER} className={aboutUsLocation ? s.active : s.link}>О нас</NavLink></li>
              <li><NavLink to={DELIVERYPAGE_ROUTER} className={deliveryLocation ? s.active : s.link}>Доставка</NavLink></li>
              </ul>
    )
}
export default Navbar;