import React from "react";
import s from "./Footer.module.css";
import logo from "../../img/logo.svg";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { HOME_ROUTER } from "../../utils/consts";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.box}>
          <div className={s.logo}>
            <NavLink to={HOME_ROUTER}>
              <img src={logo}></img>
            </NavLink>
          </div>
          <Navbar />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
