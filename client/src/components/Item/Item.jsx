import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE_ROUTER, LOGIN_ROUTER } from "../../utils/consts";
import Modal from "../Modal/Modal";
import s from "./Item.module.css";
import Cookies from "universal-cookie";
import { addFavItem, deleteFavItem } from "../../http/itemAPI";
import { Context } from "../..";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Item = ({ item }) => {
  const { user } = useContext(Context);
  const [onFavClicked, setOnFavClicked] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const cookie = new Cookies();
  const isAuth = user.isAuth;
  console.log(isAuth)

  const onClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let id = cookie.get("id");
    if (onFavClicked) {
      deleteFavItem(id, item.id).then(() => {
        setOnFavClicked(!onFavClicked);
      });
    } else {
      console.log(item);
      addFavItem(id, item.id).then(() => {
        setOnFavClicked(!onFavClicked);
      });
    }
  };
  const toAuthPage = () => {
    navigate(LOGIN_ROUTER)
}
  return (
    <div className={s.container}>
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
          {
            onFavClicked
            ?
            <div className={s.addToFavotite}>
            <AiFillHeart
              onClick={(e) => 
                onClick(e)
               }
              className={s.icon}
            />
          </div>
          :
          isAuth
          ?
          <div className={s.addToFavotite}>
            <AiOutlineHeart
              onClick={(e) => 
                onClick(e)
                }
              className={s.icon}
            />
          </div>
          :
          <div className={s.addToFavotite}>
            <AiOutlineHeart
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setOpen(true);
              }}
              className={s.icon}
            />
          </div>
          }
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
           <div className={s.modal__text}>Зайдите в систему, чтобы добавить</div>
           <div className={s.modal__btn}>
            <button onClick={()=> toAuthPage()}>Войти</button>
           </div>
      </Modal>
    </div>
  );
};

export default Item;
