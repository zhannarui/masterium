import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../..";
import { getCategoties, getItems } from "../../http/itemAPI";
import Item from "../Item/Item";
import s from "./ItemsList.module.css";

const ItemsList = observer(() => {
  const { item } = useContext(Context);
  const [searchValue, setSearchValue] = useState("");
  let filteredCatalogList = item.items.filter(
    (i) => i.categoryId === item.selectedCategory.id
  );
  let list;
  console.log(item.items);

  useEffect(() => {
    getCategoties().then((data) => item.setCategories(data));
    getItems(null).then((data) => item.setItems(data));
  }, []);

  if (item.selectedCategory.id) {
    list = filteredCatalogList;
  } else {
    list = item.items;
  }
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className={s.main__container}>
      <div className={s.search}>
        <svg
          className={s.search__icon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchValue}
          onChange={onChangeSearchValue}
          className={s.search__input}
          type="text"
          placeholder="Найти товар..."
        />
      </div>
      <div className={s.items__box}>
        {list
          .filter((obj) => {
            return obj.title.toLowerCase().includes(searchValue.toLowerCase());
          })
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
});

export default ItemsList;
