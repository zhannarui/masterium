import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Context } from "../..";
import Item from "../Item/Item";
import s from './ItemsList.module.css'

const ItemsList = observer(() => {
    const {item} = useContext(Context)
    return(
        <div className={s.main__container}>
            <div className={s.items__box}>
            {item.items.map(item => 
                <Item key={item.id} item ={item}/>
            )}
            </div>  
        </div>
    )
})

export default ItemsList