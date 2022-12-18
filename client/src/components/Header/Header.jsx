import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../img/logo.svg";
import Navbar from "../Navbar/Navbar";
import s from "./Header.module.css";
import {
  IoCartOutline,
  IoHeartOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { BASKETPAGE_ROUTER, FAVORITEPAGE_ROUTER, HOME_ROUTER, REGISTRATION_ROUTER, USERPAGE_ROUTER } from "../../utils/consts";
import { useContext } from "react";
import { Context } from "../..";
import { AiOutlineClose } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
import MenuBurger from "../MenuBurger/MenuBurger";
import { useState } from "react";
import Cookies from "universal-cookie";
import { getUserInformation } from "../../http/userAPI";


const Header = observer(() => {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation()
  const isHome = location.pathname === HOME_ROUTER
  const { user } = useContext(Context);
  const navigate = useNavigate();
  let cookie = new Cookies()
  const logOut = () => {
    cookie.remove('token')
    cookie.remove('id')
    // user.setUser({});
    user.setIsAuth(false);
    navigate(HOME_ROUTER);
  };

  useEffect(() => {
    const token = cookie.get('token')
    const id = cookie.get('id')
    if (token) {
        console.log('есть токен', token)
        console.log('есть id', id)
        user.setIsAuth(true)
        console.log(user.isAuth)
        getUserInformation(id).then((data) => {
            user.setUser(data)
        }).catch((err) => {
            console.log(err)
        })
    }
}, [])
  return (
    <header className={isHome ? s.MainHeader : s.header}>
      <div className={s.container}>
        <div className={s.headerTop}>
          <NavLink to={HOME_ROUTER} className={s.headerTopLogo}>
            <img src={logo}></img>
          </NavLink>
          {user.isAuth ? (
            <div className={s.iconsBox}>
              <NavLink to={USERPAGE_ROUTER}>
                <IoPersonOutline className={s.userIcon} />
              </NavLink>
              <NavLink to={FAVORITEPAGE_ROUTER}>
                <IoHeartOutline className={s.favoriteIcon} />
              </NavLink>
              <NavLink to={BASKETPAGE_ROUTER}>
                <IoCartOutline className={s.shopCartIcon} />
              </NavLink>
              <button className={s.logOut__button} onClick={() => logOut()}>
                Выйти
              </button>
            </div>
          ) : (
            <div className={s.iconsBox}>
              <NavLink to={REGISTRATION_ROUTER}>
                <IoPersonOutline className={s.userIcon} />
              </NavLink>
              <NavLink to={BASKETPAGE_ROUTER}>
                <IoCartOutline className={s.shopCartIcon} />
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <div className={s.headerBottom}>
        <Navbar />
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
  );
});

export default Header;
