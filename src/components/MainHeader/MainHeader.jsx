import React from 'react'
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { IoMenuSharp} from "react-icons/io5";
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo.svg'
import MenuBurger from '../MenuBurger/MenuBurger';
import Navbar from '../Navbar/Navbar'
import s from './MainHeader.module.css'

const MainHeader = () => {
  const [menuActive, setMenuActive] = useState(false)
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
        <div className={s.burgerWrap}>
        <div className={s.headerTopLogo}>
        <NavLink to = '/' className={s.headerTopLogo}>
               <img src={ logo }></img>
            </NavLink>
        </div>
                    {menuActive
                        ?
                        <AiOutlineClose
                            className={s.icon}
                            onClick={() => setMenuActive(!menuActive)}
                        />
                        :
                        <IoMenuSharp
                            className={s.icon}
                            onClick={() => setMenuActive(!menuActive)}
                        />
                    }
          </div>
          <MenuBurger      
            menuActive={menuActive}
            setMenuActive={setMenuActive}/>
</header>
  )
}
export default MainHeader;
