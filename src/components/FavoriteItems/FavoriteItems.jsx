import { observer } from "mobx-react-lite";
import React from "react";
import s from './FavoriteItems.module.css'
import favorites from '../../store/favorites'

const FavoriteItems = observer(() => {
    return (
        <div className={s.container}>
        <div className={s.itemsBox}>
            {favorites.favoritesArray.map(f =>
            <a className={s.itemLink}>
            <div className={s.item}>
              <img className={s.itemImg} src={require(`../../img/${f.img}`)}></img>
               <h2>{f.title}</h2>
               <p>{f.price} <span>руб.</span></p>
               <div className={s.deleteFromFavorite} onClick={() => favorites.removeFavoriteItem(f.id)}>
               <svg className={s.crossIcon} width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_11_361)">
                    <path d="M32 1.88533L30.1147 0L16 14.1147L1.88533 0L0 1.88533L14.1147 16L0 30.1147L1.88533 32L16 17.8853L30.1147 32L32 30.1147L17.8853 16L32 1.88533Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_11_361">
                    <rect width="32" height="32" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
               </div>
            </div>
            </a>
            )}
        </div>
        </div>
    )
})

export default FavoriteItems;