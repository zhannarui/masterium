import { observer } from "mobx-react-lite";
import React from "react";
import Categories from "../../components/Categories/Categories";
import ItemsList from "../../components/ItemsList/ItemsList";
import BottomNavbar from "../../components/BottomNavBar/BottomNavbar";
import s from "./Home.module.css";

const Home = observer(() => {

  return (
    <div className={s.main__content}>
      <div className={s.categories__box}>
        <Categories />
      </div>
      <div className={s.items__box}>
        <ItemsList />
      </div>
      <div className={s.bottomNavbar}>
        <BottomNavbar />
      </div>
    </div>
  );
});

export default Home;
