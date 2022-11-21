import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo.svg'
import Navbar from '../Navbar/Navbar'
import s from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <header className={s.header}>
    <div className={s.container}>
        <div className={s.headerTop}>
        <div className={s.headerTopLogo}>
           <img src={ logo }></img>
        </div>
        <div className={s.iconsBox}>
        <NavLink to='/UserPage'><img className={s.userIcon} src='../.././img/user-icon.svg'></img></NavLink>
        <NavLink to='/FavoritePage'><img className={s.favoriteIcon} src='./img/favorite-icon.svg'></img></NavLink>
        <NavLink to='/BasketPage'><img className={s.shopCartIcon} src='./img/shopping-cart-icon.svg'></img></NavLink>
        </div>
        </div>
        </div>
        <div className={s.headerBottom}>
        <Navbar/>
        </div>
</header>
  )
}
export default MainHeader;
