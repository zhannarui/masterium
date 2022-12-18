import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Context } from "../..";
import s from "./UserPage.module.css";

const UserPage = observer(() => {
  const { user } = useContext(Context);
  const userInfo = user.user;
  return (
    <div>
      <div className={s.container}>
        <h1 className={s.title}>Мой Профиль</h1>
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
    </div>
  );
});

export default UserPage;
