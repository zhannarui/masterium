import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import favorites from '../store/favorites'
import product from '../store/ItemPage'
import s from './Item.module.css'
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const Item = observer((props) => {
    return (
      <NavLink to={'/ProductPage/' + props.item.id} className={s.itemLink} onClick={() => {product.setChosenProduct(props.item)}}>
      <div className={s.item}>
        <img className={s.itemImg} src={require(`../img/${props.item.img}`)} alt={props.item.img}/>
         <h2>{props.item.title}</h2>
         <p>{props.item.price} <span>руб.</span></p>
         <div className={s.addToFavorite} onClick={(e) => {e.stopPropagation(); e.preventDefault();favorites.addFavoriteItem(props.item)}}>
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_5_9)">
            <path d="M16 12.472L14.212 8.894C13.768 8.008 12.998 6.734 11.908 5.704C10.836 4.69 9.552 4 8 4C4.648 4 2 6.652 2 9.84C2 12.262 3.108 13.972 5.736 16.58C6.41 17.248 7.178 17.97 8.028 18.766C10.244 20.846 13 23.434 16 26.894C19 23.434 21.756 20.846 23.972 18.766C24.822 17.97 25.592 17.246 26.264 16.58C28.892 13.972 30 12.262 30 9.84C30 6.652 27.352 4 24 4C22.446 4 21.164 4.69 20.092 5.704C19.002 6.734 18.232 8.008 17.788 8.894L16 12.472ZM16.784 29.056C16.6877 29.1701 16.5676 29.2618 16.4322 29.3247C16.2968 29.3876 16.1493 29.4202 16 29.4202C15.8507 29.4202 15.7032 29.3876 15.5678 29.3247C15.4324 29.2618 15.3123 29.1701 15.216 29.056C12.014 25.252 9.116 22.532 6.73 20.294C2.6 16.416 0 13.978 0 9.84C0 5.51 3.58 2 8 2C11.2 2 13.438 4.1 14.808 6.016C15.328 6.746 15.724 7.448 16 8C16.346 7.30914 16.7445 6.64586 17.192 6.016C18.562 4.098 20.8 2 24 2C28.42 2 32 5.51 32 9.84C32 13.978 29.4 16.416 25.27 20.294C22.884 22.534 19.986 25.254 16.784 29.054V29.056Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_5_9">
            <rect className='icon_bg' width="32" height="32" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          </div>
      </div>
      </NavLink>
    )
  })

export default Item;