import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import s from './FavoriteItem.module.css'
import Cookies from "universal-cookie";
import { deleteFavItem, getOneItem } from '../../http/itemAPI';
import { NavLink } from 'react-router-dom';
import { PRODUCTPAGE_ROUTER } from "../../utils/consts";

const FavoriteItem = (props) => {
    const { user } = useContext(Context);
    const [active, setActive] = useState(false)
    console.log('fav item', props.item)
   
    const onClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log('hi')
        const cookie = new Cookies()
        let id = cookie.get('id')
        deleteFavItem(id, props.item.itemInfo.id).then(()=>{
            console.log('bbb')
            user.deleteItemFromFav(props.item.itemInfo.id)
            setActive(false)
        })
    }
    return(
        <div className={s.container}>
            <NavLink to={PRODUCTPAGE_ROUTER + '/' + props.item.itemId}>
            <div className={s.item}>
              <img className={s.itemImg} src={"http://localhost:5000/" + props.item.itemInfo.img}></img>
               <h2>{props.item.itemInfo.title}</h2>
               <p>{props.item.itemInfo.price} <span>руб.</span></p>
               <div onClick={(e) => onClick(e)} className={s.deleteFromFavorite}>
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
            </NavLink>
        </div>
    )
}
export default FavoriteItem