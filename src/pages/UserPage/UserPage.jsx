import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import s from './UserPage.module.css'
import { useEffect } from "react";
import BottomNavbar from "../../BottomNavBar/BottomNavbar";

const UserPage = () => {
    useEffect(() => {
        document.title = "Вход | Masterium"
        window.scrollTo(0, 0);
    }, [])
    return(
        <div>
        <Header/>
        <div className={s.container}>
            <div className={s.formContainer}>
                <p className={s.title}>Вход</p>
                <form className={s.form} action="">
                <div className={s.inputGroup}>
                <input required="" type="text" name="text" autocomplete="off" className={s.input}/>
                <label class={s.userLabel}>Введите email</label>
                </div>
                <div className={s.inputGroup}>
                <input required="" type="text" name="text" autocomplete="off" className={s.input}/>
                <label class={s.userLabel}>Введите пароль</label>
                </div>
                </form>
                <p className={s.question}>Нет аккаунта? <NavLink
                        to='/registration'> Зарегистрируйтесь</NavLink></p>
                    <div className={s.butt}>
                        <button className={s.button}>Войти</button>
                    </div>
            </div>
        </div>
        <div className='bottomNavbar'>
            <BottomNavbar/>
        </div>
        </div>
    )
}

export default UserPage