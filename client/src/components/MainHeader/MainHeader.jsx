import React from 'react'
import { useContext } from 'react';
import { IoCartOutline, IoHeartOutline, IoPersonOutline} from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom'
import { Context } from '../..';
import logo from '../../img/logo.svg'
import { BASKETPAGE_ROUTER, FAVORITEPAGE_ROUTER, HOME_ROUTER, REGISTRATION_ROUTER, USERPAGE_ROUTER } from '../../utils/consts';
import Navbar from '../Navbar/Navbar'
import s from './MainHeader.module.css'
import { AiOutlineClose } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
import MenuBurger from "../MenuBurger/MenuBurger";
import { useState } from "react";

const MainHeader = () => {
  const [menuActive, setMenuActive] = useState(false);
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
            <NavLink to={USERPAGE_ROUTER}><IoPersonOutline className={s.userIcon}/></NavLink>
            <NavLink to={BASKETPAGE_ROUTER}><IoCartOutline className={s.shopCartIcon}/></NavLink>
            <NavLink to={FAVORITEPAGE_ROUTER}><IoHeartOutline className={s.favoriteIcon}/></NavLink>
            <button className={s.logOut__button} onClick={()=> logOut()}>Выйти</button>
            </div>
            :
            <div className={s.iconsBox}>
            <NavLink to={REGISTRATION_ROUTER}><IoPersonOutline className={s.userIcon}/></NavLink>
            <NavLink to={BASKETPAGE_ROUTER}><IoCartOutline className={s.shopCartIcon}/></NavLink>
            </div>
          }
        </div>
        </div>
        <div className={s.headerBottom}>
        <Navbar/>
        </div>
        <div className={s.burgerWrap}>
        <div className={s.headerTopLogo}>
          <NavLink to="/" className={s.headerTopLogo}>
            <img src={logo}></img>
          </NavLink>
        </div>
        {menuActive ? (
          <AiOutlineClose
            className={s.icon}
            onClick={() => setMenuActive(!menuActive)}
          />
        ) : (
          <IoMenuSharp
            className={s.icon}
            onClick={() => setMenuActive(!menuActive)}
          />
        )}
      </div>
      <MenuBurger menuActive={menuActive} setMenuActive={setMenuActive} />
</header>
  )
}
export default MainHeader;
