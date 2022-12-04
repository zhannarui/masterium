import React from "react";
import { NavLink } from 'react-router-dom'
import { CONTACTPAGE_ROUTER } from "../../utils/consts";
import s from './Navbar.module.css'
const Navbar = () => {
    return(
              <ul className={s.nav}>
              <li><NavLink to='/'>Каталог</NavLink></li>
              <li><NavLink to={CONTACTPAGE_ROUTER}>Контакты</NavLink></li>
              <li><NavLink to='/AboutUs'>О нас</NavLink></li>
              <li><NavLink to='/Delivery'>Доставка</NavLink></li>
              </ul>
    )
}
export default Navbar;