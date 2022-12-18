import React from "react";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE_ROUTER ,LOGIN_ROUTER } from "../../utils/consts";
import Modal from "../Modal/Modal";
import s from "./Item.module.css";

const Item = ({ item }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <div
      className={s.item__link}
      onClick={() => navigate(PRODUCTPAGE_ROUTER + "/" + item.id)}
    >
      <div className={s.item}>
        <img
          className={s.item__img}
          src={"http://localhost:5000/" + item.img}
          alt={item.title}
        />
        <p className={s.item__title}>{item.title}</p>
        <p className={s.item__price}>
          {item.price} <span>руб.</span>
        </p>
        <div className={s.addToFavotite}>
              <IoHeartOutline
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setOpen(true);
                }}
                className={s.icon}
              />
            </div>
            <Modal open={open} setOpen={setOpen}>
              Скоро появится добавление
            </Modal>
      </div>
    </div>
  );
};

export default Item;
