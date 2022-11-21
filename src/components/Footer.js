import React from 'react'
import logo from '../img/logo.svg'
import Navbar from './Navbar/Navbar';

const Footer = () =>  {
  return (
    <footer className='footer'>
        <div className='container'>
          <div className='footer__box'>
            <div className='footer__logo'>
               <img src={ logo }></img>
            </div>
            <Navbar/>
          </div>
        </div>
    </footer>
  )
}

export default Footer;