import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getOneItem } from "../../http/itemAPI";
import { BASKETPAGE_ROUTER } from "../../utils/consts";
import s from './ProductPage.module.css'

const ProductPage = () =>{
    const [item, setItem] = useState({})
    const [onBaketClicked, setOnBasketClicked] = useState(false);
    const navigate = useNavigate() 
    const {id} = useParams()
    useEffect(()=>{
        getOneItem(id).then(data => setItem(data))
    }, [])
    return(
        <div className={s.container}>
            <div className={s.title}>
                <p>{item.title}</p> 
            </div>
            <div className={s.content}>
                <div className={s.content__img}>
                    <img src={'http://localhost:5000/' + item.img} alt={item.title} />
                </div>
                <div className={s.content__info}>
                    <div className={s.info__top}>
                    <p>{item.price} <span>руб.</span></p>
                    <IoHeartOutline className={s.icon}/>
                    </div>
                    <div className={s.basket__button}>
                    {onBaketClicked
                            ?
                            <button className={s.button}>
                                В корзине
                            </button>
                            :
                            <button
                                className={s.button}
                                onClick={() => setOnBasketClicked(true)}
                            >
                                В корзину
                            </button>
                        }
                        {onBaketClicked
                            ?
                                <button className={s.button} onClick={()=> navigate(BASKETPAGE_ROUTER)}>
                                    Оформить заказ
                                </button>
                            :
                            <></>
                        }

                    </div>
                </div>
            </div>
            <div className={s.description}>
                <p className={s.description__title}>Описание:</p>
                <div className={s.description__text}>
                    {item.description}
                </div>
            </div>
        </div>
    )
}

export default ProductPage