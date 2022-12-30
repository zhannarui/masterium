import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Cookie from "universal-cookie";
import { PRODUCTPAGE_ROUTER} from "../../utils/consts";
import { Context } from "../..";
import { deleteBasketItem } from "../../http/itemAPI";
import s from "./BasketItem.module.css";
const BasketItem = observer((props) => {
  const count = props.item.item_count;
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const onClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('hi')
    const cookie = new Cookies()
    let id = cookie.get('id')
    deleteBasketItem(id, props.item.itemInfo.id).then(() => {
        user.deleteItemFromBasket(props.item.itemInfo.id);
      })
}
  return (
    <div className={s.container}>
      <div className={s.itemsBox}>
        <div className={s.link} onClick={() => navigate(PRODUCTPAGE_ROUTER + "/" + props.item.itemId)}>
          <div className={s.item}>
            <div className={s.img}>
              <img
                src={"http://localhost:5000/" + props.item.color.img}
                alt=""
              />
            </div>
            <div className={s.title}>
              <p>
                {props.item.itemInfo.title} ({props.item.color.name})
              </p>
            </div>
            <div className={s.price}>{props.item.itemInfo.price} руб.</div>
            <div className={s.counter}>
              <p>{count} шт.</p>
            </div>
            <div className={s.price}>
              {props.item.item_count * props.item.itemInfo.price} руб.
            </div>
          </div>
          <div
            className={s.deleteFromBasket}
                onClick={(e) => onClick(e)}
          >
            <svg
              className={s.crossIcon}
              width="16"
              height="16"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_11_361)">
                <path
                  d="M32 1.88533L30.1147 0L16 14.1147L1.88533 0L0 1.88533L14.1147 16L0 30.1147L1.88533 32L16 17.8853L30.1147 32L32 30.1147L17.8853 16L32 1.88533Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_11_361">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
});

export default BasketItem;
