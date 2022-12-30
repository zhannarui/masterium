import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import s from "./FavoritePage.module.css";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { deleteFavItem, getFavorite, getOneItem } from "../../http/itemAPI";
import FavoriteItem from "../../components/FavoriteItem/FavoriteItem";
import { toJS } from "mobx";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HOME_ROUTER } from "../../utils/consts";
import BottomNavbar from "../../components/BottomNavBar/BottomNavbar";

const FavoritePage = observer(() => {
  const { user } = useContext(Context);
  const cookie = new Cookies();
  const favoriteList = toJS(user.favorite);
  console.log("test4", favoriteList);

  useEffect(() => {
    window.scrollTo(0, 0);

    const id = cookie.get("id");
    if (id) {
      getFavorite(id).then((data) => {
        console.log("Все избранные", data);
        user.cleanFav();
        data.map((item) => {
          console.log("Один избранный товар", item);
          getOneItem(item.itemId).then((data2) => {
            console.log("Инфа об одном товаре", data2);
            user.setToFavorite({ ...item, itemInfo: data2 });
          });
        });
      });
    }
  }, []);
  return (
    <div>
    <div className={s.content}>
      <h1 className={s.title}>Избранные товары</h1>
      {favoriteList.length === 0 ? (
        <div className={s.null__box}>
          <p>У вас нет товаров в избранном</p>
          <NavLink className={s.box__link} to={HOME_ROUTER}>
            Перейти в каталог
          </NavLink>
        </div>
      ) : (
        <div>
             <div className={s.clearButton}>
                <button onClick={() => {
                  const id = cookie.get('id')
                  favoriteList.map((item) => {
                    console.log('test item',item)
                  deleteFavItem(id, item.itemId).then(()=>{
                    console.log('favTest')
                    user.deleteItemFromFav(item.itemId)});
                  })
                }}>Очистить все</button>
            </div>
          <div className={s.itemsBox}>
              {favoriteList.map((item) => (
                <FavoriteItem key={item.id} item={item} />
              ))}
            </div>
          </div>
      )}
    </div>
    <div className={s.bottomNavbar}>
          <BottomNavbar/>
    </div>
    </div>
  );
});

export default FavoritePage;
