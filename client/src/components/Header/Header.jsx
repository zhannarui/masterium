import React from "react";
import { observer } from "mobx-react-lite";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../img/logo.svg";
import Navbar from "../Navbar/Navbar";
import s from "./Header.module.css";
import {
  IoCartOutline,
  IoHeartOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { HOME_ROUTER, REGISTRATION_ROUTER } from "../../utils/consts";
import { useContext } from "react";
import { Context } from "../..";
import { AiOutlineClose } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
import MenuBurger from "../MenuBurger/MenuBurger";
import { useState } from "react";

const Header = observer(() => {
  const [menuActive, setMenuActive] = useState(false);
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigate(HOME_ROUTER);
  };
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.headerTop}>
          <NavLink to={HOME_ROUTER} className={s.headerTopLogo}>
            <img src={logo}></img>
          </NavLink>
          {user.isAuth ? (
            <div className={s.iconsBox}>
              <NavLink to="#">
                <IoPersonOutline className={s.userIcon} />
              </NavLink>
              <NavLink to="/FavoritePage">
                <IoHeartOutline className={s.favoriteIcon} />
              </NavLink>
              <NavLink to="/BasketPage">
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
              <NavLink to="/BasketPage">
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
