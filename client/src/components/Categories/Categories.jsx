import React from "react";
import { observer } from 'mobx-react-lite';
import { useContext } from "react";
import { Context } from "../..";
import s from './Categories.module.css'
import { NavLink } from "react-router-dom";
import { HOME_ROUTER } from "../../utils/consts";

const Categories = observer(() => {
    const {item} = useContext(Context)
    return(
        <div className={s.main__container}>
            <div className={s.categories__box}>
            {item.categories.map(category =>
                <div className={category.id === item.selectedCategory.id ? s.active : s.categories__item} onClick={()=> item.setSelectedCategory(category)}  key={category.id}>{category.name}</div>
            )}
            </div>
            
        </div>
    )
})

export default Categories