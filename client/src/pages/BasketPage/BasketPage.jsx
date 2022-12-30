import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { Context } from "../..";
import BasketItem from "../../components/BasketItem/BasketItem";
import BottomNavbar from "../../components/BottomNavBar/BottomNavbar";
import OrderModal from "../../components/OrderModal/OrderModal";
import {
  createOrder,
  deleteBasketItem,
  getBasket,
  getOneItem,
} from "../../http/itemAPI";
import { HOME_ROUTER, LOGIN_ROUTER, ORDERPAGE_ROUTER, REGISTRATION_ROUTER } from "../../utils/consts";
import s from "./BasketPage.module.css";

const BasketPage = observer(() => {
  const { user } = useContext(Context);
  const userInfo = user.user;
  let [userData, setUserData] = useState({
    name: userInfo.name,
    surname: userInfo.surname,
    email: userInfo.email,
  });
  let [address, setAddress] = useState("");
  let [phone, setPhone] = useState("");
  let [isOrdered, setIsOrdered] = useState(false);
  const [orderActive, setOrderActive] = useState(false);
  const [err, setErr] = useState(false);
  const basketList = toJS(user.basket);
  const totalPrice = user.totalPrice;
  const isAuth = user.isAuth;
  const cookie = new Cookies();
  const navigate = useNavigate();
  console.log(totalPrice);

  useEffect(() => {
    window.scrollTo(0, 0);
    const id = cookie.get("id");
    console.log(id);
    if (id) {
      getBasket(id).then((data) => {
        user.cleanBasket();
        data.map((item) => {
          getOneItem(item.itemId).then((data2) => {
            user.setBasket({ ...item, itemInfo: data2 });
          });
        });
      });
    }
  }, []);

  const orderHandler = () => {
    if (!address || !phone) {
      setErr(true);
    } else {
      let id = cookie.get("id");
      if (id) {
        createOrder(
          id,
          userData.name,
          userData.surname,
          userData.email,
          phone,
          address,
          basketList,
          totalPrice
        ).then(() => {
          setErr(false);
          setIsOrdered(true);
        });
      }
    }
  };
  const toOrderPage = () => {
    navigate(ORDERPAGE_ROUTER);
  };
  const toAuthPage=()=>{
    navigate(LOGIN_ROUTER)
  }
  return (
    <div>
    <div className={s.basketPageBox}>
      <h1 className={s.basketPageBoxTitle}>Моя корзина</h1>
      {basketList.length === 0 ? (
        <div className={s.nullBox}>
          <p>У вас нет товаров в корзине</p>
          <NavLink className={s.nullBoxLink} to={HOME_ROUTER}>
            Перейти в каталог
          </NavLink>
        </div>
      ) : (
        <div>
          <div className={s.clearButton}>
            <button
              onClick={() => {
                let id = cookie.get("id");
                basketList.map((item) => {
                  deleteBasketItem(id, item.itemInfo.id).then(() => {
                    user.deleteItemFromBasket(item.itemInfo.id);
                  });
                });
              }}
            >
              Очистить всё
            </button>
          </div>
          <div className={s.itemsBox}>
            {basketList.map((item) => {
              return <BasketItem key={item.id} item={item} />;
            })}
          </div>
          <div className={s.totalPrice}>
            <b>Сумма: </b>
            {user.totalPrice} руб.
          </div>
          <div className={s.clearButton}>
            <button onClick={() => setOrderActive(true)}>Оформить заказ</button>
          </div>
        </div>
      )}
      {!isAuth ? (
        <OrderModal active={orderActive} setActive={setOrderActive}>
          <>
            <div className={s.successText}>Для оформления заказа войдите в систему</div>
            <div className={s.successButton}>
              <button onClick={()=> toAuthPage()}>Войти</button>
            </div>
          </>
        </OrderModal>
      ) : isOrdered ? (
        <OrderModal active={orderActive} setActive={setOrderActive}>
          <div className={s.successText}>Заказ успешно оформлен</div>
          <div className={s.successButton}><button onClick={()=> toOrderPage()}>Перейти к заказам</button></div>
        </OrderModal>
      ) : (
        <OrderModal active={orderActive} setActive={setOrderActive}>
          <div className={s.orderBox}>
            <div className={s.orderTitle}>Оформление заказа</div>
            <div className={s.orderContainer}>
              <div className={s.orderItemBox}>
                {basketList.map((item) => (
                  <div className={s.orderItemInfo} key={item.itemInfo.id}>
                    <div className={s.topImg}>
                      <img
                        src={"http://localhost:5000/" + item.color.img}
                        alt={item.itemInfo.title}
                      />
                    </div>
                    <div className={s.infoText}>
                      {item.itemInfo.title} ({item.color.name})
                    </div>
                    <div className={s.infoText}>{item.itemInfo.price} руб.</div>
                    <div className={s.infoText}>{item.item_count} шт.</div>
                    <div className={s.infoText}>
                      {item.item_count * item.itemInfo.price} руб.
                    </div>
                  </div>
                ))}
              </div>
              <div className={s.containerText}>
                Общая стоимость заказа: <span>{totalPrice} руб.</span>
              </div>
              <div className={s.contactBox}>
                <div className={s.contactText}>Контактные данные:</div>
                <input
                  type="name"
                  placeholder="Введите ваше имя"
                  value={userData.name}
                  onChange={(e) => {
                    setErr(false);
                    setUserData({ ...userData, name: e.target.value });
                  }}
                />
                <input
                  type="surname"
                  placeholder="Введите вашу фамилию"
                  value={userData.surname}
                  onChange={(e) => {
                    setErr(false);
                    setUserData({ ...userData, surname: e.target.value });
                  }}
                />
                <input
                  type="email"
                  placeholder="Введите ваш email"
                  value={userData.email}
                  onChange={(e) => {
                    setErr(false);
                    setUserData({ ...userData, email: e.target.value });
                  }}
                />
                <input
                  type="address"
                  placeholder="Введите адрес доставки"
                  value={address}
                  onChange={(e) => {
                    setErr(false);
                    setAddress(e.target.value);
                  }}
                />
                <input
                  type="tel"
                  placeholder="Введите номер телефона"
                  value={phone}
                  onChange={(e) => {
                    setErr(false);
                    setPhone(e.target.value);
                  }}
                />
              </div>
            </div>
            <div style={err ? { color: "red" } : { opacity: "0" }}>
              Заполните все поля
            </div>
          </div>
          <div className={s.orderButtons}>
            <button onClick={() => orderHandler()}>Оформить</button>
            <button onClick={() => setOrderActive(false)}>Отменить</button>
          </div>
        </OrderModal>
      )}
    </div>
    <div className={s.bottomNavbar}>
        <BottomNavbar />
      </div>
    </div>
  );
});

export default BasketPage;
