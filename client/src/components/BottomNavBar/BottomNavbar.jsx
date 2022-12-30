import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { IoCartOutline, IoHeartOutline, IoPersonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Context } from "../..";
import { BASKETPAGE_ROUTER, FAVORITEPAGE_ROUTER, REGISTRATION_ROUTER, USERPAGE_ROUTER } from "../../utils/consts";
import s from './BottomNavbar.module.css'

const BottomNavbar = () => {
    const [active, setActive] = useState(false)
    const {user} = useContext(Context)
    const isAuth = user.isAuth
    return(
        <div className={s.navigationBody}>
        <div className={s.navigation}>
            {
                isAuth ? 
                <ul>
                <li className={active ? "list active" : "list"} onClick={() => setActive(true)}>
                    <NavLink to={USERPAGE_ROUTER} onClick={() => {
                        setActive(active)
                    }}>
                        <span className={s.navigationIcon}>
                            <IoPersonOutline/>
                        </span>
                        <span className={s.navigationText}>Профиль</span>
                    </NavLink>
                </li>
                <li className={active ? "list active" : "list"} onClick={() => setActive(true)}>
                    <NavLink to={FAVORITEPAGE_ROUTER} onClick={() => {
                        setActive(active)
                    }}>
                        <span className={s.navigationIcon}>
                            <IoHeartOutline/>
                        </span>
                        <span className={s.navigationText}>Избранное</span>
                    </NavLink>
                </li>
                <li className={active ? "list active" : "list"} onClick={() => setActive(true)}>
                    <NavLink to={BASKETPAGE_ROUTER} onClick={() => {
                        setActive(active)
                    }}>
                        <span className={s.navigationIcon}>
                        <IoCartOutline/>
                        </span>
                        <span className={s.navigationText}>Корзина</span>
                    </NavLink>
                </li>
            </ul>
            :
            <ul className={s.notAuth}>
            <li className={active ? "list active" : "list"} onClick={() => setActive(true)}>
                <NavLink to={REGISTRATION_ROUTER} onClick={() => {
                    setActive(active)
                }}>
                    <span className={s.navigationIcon}>
                        <IoPersonOutline/>
                    </span>
                    <span className={s.navigationText}>Вход</span>
                </NavLink>
            </li>
        </ul>
            }
        </div>
        </div>
    )
}

export default BottomNavbar