import React from 'react'
import { useContext } from 'react';
import { IoCartOutline, IoHeartOutline, IoPersonOutline} from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom'
import { Context } from '../..';
import logo from '../../img/logo.svg'
import { HOME_ROUTER, REGISTRATION_ROUTER } from '../../utils/consts';
import Navbar from '../Navbar/Navbar'
import s from './MainHeader.module.css'

const MainHeader = () => {
  const {user} = useContext(Context)
  const navigate = useNavigate()
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    navigate(HOME_ROUTER)
  }
  return (
    <header className={s.header}>
    <div className={s.container}>
        <div className={s.headerTop}>
        <NavLink to = {HOME_ROUTER} className={s.headerTopLogo}>
               <img src={ logo }></img>
        </NavLink>
        {  user.isAuth ?
                <div className={s.iconsBox}>
            <NavLink to='#'><IoPersonOutline className={s.userIcon}/></NavLink>
            <NavLink to='/BasketPage'><IoCartOutline className={s.shopCartIcon}/></NavLink>
            <NavLink to='/FavoritePage'><IoHeartOutline className={s.favoriteIcon}/></NavLink>
            <button className={s.logOut__button} onClick={()=> logOut()}>Выйти</button>
            </div>
            :
            <div className={s.iconsBox}>
            <NavLink to={REGISTRATION_ROUTER}><IoPersonOutline className={s.userIcon}/></NavLink>
            <NavLink to='/BasketPage'><IoCartOutline className={s.shopCartIcon}/></NavLink>
            </div>
          }
        </div>
        </div>
        <div className={s.headerBottom}>
        <Navbar/>
        </div>
</header>
  )
}
export default MainHeader;
