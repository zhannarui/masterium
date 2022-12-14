import React from 'react'
import { useState } from 'react'
import Categories from '../../components/Categories'
import Items from '../../components/Items'
import MainHeader from '../../components/MainHeader/MainHeader'
import s from './Home.module.css'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import BottomNavbar from '../../BottomNavBar/BottomNavbar'

const Home = (props) => {
  useEffect(() => {
    document.title = "Главная | Masterium"
    window.scrollTo(0, 0);
}, [])
  return (
    <div>
    <MainHeader/>
    <div className='main__page'>
    <Categories categories={props.state.categories}/>
    </div>
    <Items items={props.state.items}/>
    <div className='bottomNavbar'>
    <BottomNavbar/>
    </div>
    </div>
  )
}
export default Home;
