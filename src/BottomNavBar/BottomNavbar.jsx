import React from "react";
import { useState } from "react";
import { IoCartOutline, IoHeartOutline, IoPersonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import './BottomNavbar.css'

const BottomNavbar = () => {
    const [active, setActive] = useState(false)
    return(
        <div className="navigation-body">
        <div className="navigation">
            <ul>
                <li className={active ? "list active" : "list"} onClick={() => setActive(true)}>
                    <NavLink to='/userPage' onClick={() => {
                        setActive(active)
                    }}>
                        <span className="navigation-icon">
                            <IoPersonOutline/>
                        </span>
                        <span className="navigation-text">Профиль</span>
                    </NavLink>
                </li>
                <li className={active ? "list active" : "list"} onClick={() => setActive(true)}>
                    <NavLink to='/FavoritePage' onClick={() => {
                        setActive(active)
                    }}>
                        <span className="navigation-icon">
                            <IoHeartOutline/>
                        </span>
                        <span className="navigation-text">Избранное</span>
                    </NavLink>
                </li>
                <li className={active ? "list active" : "list"} onClick={() => setActive(true)}>
                    <NavLink to='/BasketPage' onClick={() => {
                        setActive(active)
                    }}>
                        <span className="navigation-icon">
                        <IoCartOutline/>
                        </span>
                        <span className="navigation-text">Корзина</span>
                    </NavLink>
                </li>
            </ul>
        </div>
        </div>
    )
}

export default BottomNavbar