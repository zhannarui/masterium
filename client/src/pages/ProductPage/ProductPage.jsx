import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Context } from "../..";
import { getColors, getOneItem } from "../../http/itemAPI";
import { BASKETPAGE_ROUTER } from "../../utils/consts";
import s from "./ProductPage.module.css";

const ProductPage = observer(() => {
  const { item } = useContext(Context);
  const [items, setItem] = useState({ colors: [] });
  const [onBaketClicked, setOnBasketClicked] = useState(false);
  const [count, setCount] = useState(1)
  const navigate = useNavigate();
  const { id } = useParams();
  let [color, setColor] = useState("");
  useEffect(() => {
    getOneItem(id).then((data) => setItem(data));
    getColors(id).then((data) => item.setColors(data));
  }, []);
  return (
    <div className={s.container}>
      <div className={s.title}>
        <p>{items.title}</p>
      </div>
      <div className={s.content}>
        <div className={s.content__img}>
          <img src={"http://localhost:5000/" + items.img} alt={items.title} />
        </div>
        <div className={s.content__info}>
          <div className={s.info__top}>
            <p className={s.price}>
              {items.price} <span>руб.</span>
            </p>
            <IoHeartOutline className={s.icon} />
          </div>
          {item.colors.itemId === item.id ? (
            <div className={s.colors__wrapper}>
              <p className={s.colors__title}>
                Цвет: <span>{color}</span>
              </p>
              <div className={s.colors__box}>
                {item.colors.map((item) => (
                  <div
                    className={s.colors__img}
                    key={item.key}
                    onClick={() => setColor(item.name)}
                  >
                    <img src={"http://localhost:5000/" + item.img}></img>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
          <p className={s.counter__title}>Количество:</p>
          <div className={s.counter}>
            <button
              className={s.minus}
              onClick={() => {
                if (count !== 1) {
                  setCount((count) => count - 1);
                }
              }}
            >
              -
            </button>
            <p className={s.amount}>{count}</p>
            <button
              className={s.plus}
              onClick={() => setCount((count) => count + 1)}
            >
              +
            </button>
          </div>
          <div className={s.basket__button}>
            {onBaketClicked ? (
              <button className={s.button}>В корзине</button>
            ) : (
              <button
                className={s.button}
                onClick={() => setOnBasketClicked(true)}
              >
                В корзину
              </button>
            )}
            {onBaketClicked ? (
              <button
                className={s.button}
                onClick={() => navigate(BASKETPAGE_ROUTER)}
              >
                Оформить заказ
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
    </div>
  );
});

export default ProductPage;
