import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import { Context } from "../..";
import BottomNavbar from "../../components/BottomNavBar/BottomNavbar";
import { getOrders } from "../../http/itemAPI";
import { HOME_ROUTER } from "../../utils/consts";
import s from "./OrderPage.module.css";

const OrderPage = observer(() => {
  const { user } = useContext(Context);
  const ordersList = toJS(user.orders);
  console.log(ordersList);
  const cookie = new Cookies();

  useEffect(() => {
    const id = cookie.get("id");
    if (id) {
      getOrders(id).then((data) => {
        console.log("data", data);
        user.cleanOrders();
        user.setOrders(data);
      });
    }
  }, []);

  return (
    <div>
    <div className={s.orderPageBox}>
      <h1 className={s.orderPageTitle}>Мои заказы</h1>
      {ordersList.length === 0 ? (
        <div className={s.nullBox}>
          <p>У вас нет совершенных покупок</p>
          <NavLink className={s.nullBoxLink} to={HOME_ROUTER}>
            Перейти в каталог
          </NavLink>
        </div>
      ) : (
        <div className={s.orderItemBox}>
          {ordersList.map((item) => (
            <div key={item.id} className={s.ItemBoxContainer}>
              <div className={s.orderItemBoxText}>
                Дата заказа: {item.createdAt.substring(0, 10)}
              </div>
              <div className={s.orderItemBoxText}>
                Адрес доставки: {item.phone}
              </div>
              <div className={s.containerInfo}>
                <div className={s.orderItemBoxText}>
                  Количество товаров: {item.order_item_products.length} шт.
                </div>
                <div className={s.orderItemBoxText}>
                  Общая стоимость: {item.total_price} руб.
                </div>
              </div>
              <div className={s.orderItemBoxText}>Список товаров:</div>
              <div className={s.itemBox}>
                {item.order_item_products.map((i) => (
                  <div key={i.id} className={s.item}> Позиция: {" "}
                    "{i.item.title} ({i.color.name})" {i.item.price} руб. {" "}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <div className={s.bottomNavbar}>
        <BottomNavbar />
      </div>
    </div>
  );
});

export default OrderPage;
