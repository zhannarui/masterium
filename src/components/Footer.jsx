import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.svg'
import Navbar from './Navbar/Navbar';

const Footer = () =>  {
  return (
    <footer className='footer'>
        <div className='container'>
          <div className='footer__box'>
            <div className='footer__logo'>
            <NavLink to = '/'>
               <img src={ logo }></img>
            </NavLink>
            </div>
            <Navbar/>
          </div>
        </div>
    </footer>
  )
}

export default Footer;