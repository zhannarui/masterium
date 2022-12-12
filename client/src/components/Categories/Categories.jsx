import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../..";
import s from "./Categories.module.css";
import { NavLink} from "react-router-dom";
import { HOME_ROUTER } from "../../utils/consts";
import Item from "../Item/Item";
import { getItems } from "../../http/itemAPI";

const Categories = observer(() => {
  const { item } = useContext(Context);
  return (
    <div className={s.main__container}>
      <div className={s.categories__box}>
      <div className={s.categories__item} onClick={item.items.map(item => 
              <Item key={item.id} item ={item}/>
          )}>
          <NavLink to={HOME_ROUTER}>Все</NavLink>
        </div>
        {item.categories.map((category) => (
          <div
            className={
              category.id === item.selectedCategory.id
                ? s.active
                : s.categories__item
            }
            onClick={() => item.setSelectedCategory(category)}
            key={category.id}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Categories;
