import { observer } from 'mobx-react-lite';
import React from 'react'
import { NavLink } from 'react-router-dom';
import FavoriteItems from '../components/FavoriteItems/FavoriteItems';
import Header from '../components/Header/Header'
import favorites from '../store/favorites'
import { useEffect } from 'react';
import BottomNavbar from '../BottomNavBar/BottomNavbar';

const FavoritePage = observer(() => {
  useEffect(() => {
    document.title = "Избранное | Masterium"
    window.scrollTo(0, 0);
}, [])
  return (
    <div>
      <Header/>
      <div className='favoritePage-content'>
        <h1 className='favoritePage-title'>Избранные товары</h1>
        {
          favorites.favoritesArray < 1 
          ? 
          <div className='favoritePage__null-box'>
          <p>У вас нет избранных товаров</p>
          <NavLink className='null__box-link' to='/'>Перейти в каталог</NavLink>
          </div>
          :
          <div>
            <div className='favoritePage__clearButton'>
              <button onClick={() => favorites.clearAll()}>Очистить всё</button>
            </div>
             <FavoriteItems/>
          </div>
        }
        </div>
        <div className='bottomNavbar'>
          <BottomNavbar/>
        </div>
      </div>
  )
})
export default FavoritePage;


