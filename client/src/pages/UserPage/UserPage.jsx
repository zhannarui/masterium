import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { Context } from "../..";
import BottomNavbar from "../../components/BottomNavBar/BottomNavbar";
import { FAVORITEPAGE_ROUTER, ORDERPAGE_ROUTER, HOME_ROUTER } from "../../utils/consts";
import s from "./UserPage.module.css";

const UserPage = observer(() => {
  const { user } = useContext(Context);
  const userInfo = user.user;
  const navigate = useNavigate()
  const cookie = new Cookies()

const toFavPage=()=>{
  navigate(FAVORITEPAGE_ROUTER)
}

const toOrderPage=()=>{
  navigate(ORDERPAGE_ROUTER)
}
const logOut = () => {
  cookie.remove('token')
  cookie.remove('id')
  user.setIsAuth(false);
  navigate(HOME_ROUTER);
};
  return (
    <div>
      <div className={s.container}>
        <h1 className={s.title}>Мой Профиль</h1>
        <div className={s.buttons}>
        <button onClick={()=> toFavPage()}>Избранные</button>
        <button onClick={()=> toOrderPage()}>Заказы</button>
        <button onClick={()=> logOut()}>Выйти</button>
        </div>
        <div className={s.info}>
          <div className={s.item}>
            <label className={s.item__title}>Электронная почта</label>
            <div className={s.item__value}>{userInfo.email}</div>
          </div>
          <div className={s.item}>
            <label className={s.item__title}>Имя</label>
            <div className={s.item__value}>{userInfo.name}</div>
          </div>
          <div className={s.item}>
            <label className={s.item__title}>Фамилия</label>
            <div className={s.item__value}>{userInfo.surname}</div>
          </div>
        </div>
      </div>
      <div className={s.bottomNavbar}>
          <BottomNavbar/>
    </div>
    </div>
  );
});

export default UserPage;
