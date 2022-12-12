import { observer } from "mobx-react-lite";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../..";
import Categories from "../../components/Categories/Categories";
import ItemsList from "../../components/ItemsList/ItemsList";
import { getCategoties, getItems } from "../../http/itemAPI";
import BottomNavbar from "../../components/BottomNavBar/BottomNavbar";
import s from './Home.module.css'

const Home = observer(() =>{
    const {item} = useContext(Context)
    useEffect(() => {
        getCategoties().then(data => item.setCategories(data))
        getItems(null).then(data => 
            item.setItems(data))
    }, [])

    useEffect(() => {
        getItems(item.selectedCategory.id).then(data => 
            item.setItems(data))
    }, [item.selectedCategory])

    return(
        <div className={s.main__content}>
            <div className={s.categories__box}>
                <Categories/>
            </div>
            <div className={s.items__box}>
                <ItemsList/>
            </div>
            <div className={s.bottomNavbar}>
                <BottomNavbar/>
            </div>
        </div>
    )
})

export default Home