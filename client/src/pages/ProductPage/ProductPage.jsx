import {
  addBasketItem,
  addFavItem,
  deleteFavItem,
  getColors,
  getOneItem,
} from "../../http/itemAPI";
import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoCompassOutline, IoHeartOutline } from "react-icons/io5";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Context } from "../..";
import { BASKETPAGE_ROUTER, LOGIN_ROUTER } from "../../utils/consts";
import s from "./ProductPage.module.css";
import Cookies from "universal-cookie";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Modal from "../../components/Modal/Modal";
import BottomNavbar from "../../components/BottomNavBar/BottomNavbar";

const ProductPage = observer(() => {
  const { item } = useContext(Context);
  const { user } = useContext(Context);
  const isAuth = user.isAuth;
  const [items, setItem] = useState({ colors: [] });
  const [onBaketClicked, setOnBasketClicked] = useState(false);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  let [color, setColor] = useState("");
  const [colors, setColors] = useState([]);
  let [img, setIMG] = useState("");
  let [clicked, setIsClicked] = useState(false);
  const [onFavClicked, setOnFavClicked] = useState(false);
  const cookie = new Cookies();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    getOneItem(id).then((data) => setItem(data));
    getColors(id).then((colors) => setColors(colors));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickedBasketButton = () => {
    if (colors.length > 0) {
      if (!color) {
        setActive(true);
      } else {
        const id = cookie.get("id");
        addBasketItem(id, items.id, color, 1).then(() => {
          console.log("все ок");
          setOnBasketClicked(true);
        });
      }
    } 
  };

  const onClickedFavButton = () => {
    if (onFavClicked) {
      const cookie = new Cookies();
      let id = cookie.get("id");
      deleteFavItem(id, items.id).then(() => {
        setOnFavClicked(!onFavClicked);
      });
    }
    const id = cookie.get("id");
    addFavItem(id, items.id).then(() => {
      setOnFavClicked(!onFavClicked);
    });
  };
  const toAuthPage = () => {
    navigate(LOGIN_ROUTER);
  };
  return (
    <div>
    <div className={s.container}>
      <div className={s.title}>
        <p>{items.title}</p>
      </div>
      <div className={s.content}>
        <div className={s.content__img}>
          {clicked ? (
            <img
              className={s.mainIMG}
              src={"http://localhost:5000/" + img}
              alt={items.title}
            />
          ) : (
            <img
              className={s.mainIMG}
              src={"http://localhost:5000/" + items.img}
              alt={items.title}
            />
          )}
        </div>
        <div className={s.content__info}>
          <div className={s.info__top}>
            <p className={s.price}>
              {items.price} <span>руб.</span>
            </p>
            {onFavClicked ? (
              <AiFillHeart
                className={s.icon}
                onClick={() => onClickedFavButton()}
              />
            ) : isAuth ? (
              <AiOutlineHeart
                className={s.icon}
                onClick={() => onClickedFavButton()}
              />
            ) : (
              <AiOutlineHeart
                className={s.icon}
                onClick={() => setOpen(true)}
              />
            )}
          </div>
          {item.colors.itemId === item.id ? (
            <div className={s.colors__wrapper}>
              <p className={s.colors__title}>
                Цвет: <span>{color}</span>
              </p>
              <div className={s.colors__box}>
                {colors.map((item) => (
                  <div
                    className={s.colors__img}
                    key={item.key}
                    onClick={() => {
                      setColor(item.name);
                      setIMG(item.img);
                      setIsClicked(true);
                    }}
                  >
                    <img src={"http://localhost:5000/" + item.img}></img>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className={s.basket__button}>
            {onBaketClicked ? (
              <button className={s.button}>В корзине</button>
            ) : (
              <button
                className={s.button}
                onClick={
                  isAuth ? onClickedBasketButton : (e) => {
                    setOpen(true)
                  }
                }
              >
                В корзину
              </button>
            )}
            {onBaketClicked ? (
              <button
                className={s.button}
                onClick={() => navigate(BASKETPAGE_ROUTER)}
              >
                Оформить <br />
                заказ
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className={s.description}>
        <p className={s.description__title}>Описание:</p>
        <div className={s.description__text}>{items.description}</div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <div className={s.modal__text}>Зайдите в систему, чтобы добавить</div>
        <div className={s.modal__btn}>
          <button onClick={() => toAuthPage()}>Войти</button>
        </div>
      </Modal>
      <Modal open={active} setOpen={setActive}>
        <div className={s.modal__text}>Выберите цвет, чтобы добавить в корзину</div>
        <div className={s.modal__btn}>
          <button onClick={() => setActive(false)}>ок</button>
        </div>
      </Modal>
    </div>
    <div className={s.bottomNavbar}>
        <BottomNavbar />
      </div>
    </div>
  );
});

export default ProductPage;
