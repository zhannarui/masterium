import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import s from './Auth.module.css'
import { HOME_ROUTER, LOGIN_ROUTER, REGISTRATION_ROUTER } from "../../utils/consts";
import { observer } from "mobx-react-lite";
import { login, registration } from "../../http/userAPI";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../..";
import BottomNavbar from "../../components/BottomNavBar/BottomNavbar";

const  Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTER

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(name,surname,email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
           navigate(HOME_ROUTER)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return(
        <div>
        <div className={s.container}>
            {
                isLogin ? 
                <div className={s.formContainer}>
                <p className={s.title}>Вход</p>
                <form className={s.form} action="">
                <div className={s.inputGroup}>
                <input type="text" placeholder="Введите email" className={s.input} value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className={s.inputGroup}>
                <input type="password" placeholder="Введите пароль" className={s.input} value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                </form>
                <p className={s.question}>Нет аккаунта? <NavLink
                        to={REGISTRATION_ROUTER}>Зарегистрируйтесь</NavLink></p>
                    <div className={s.butt}>
                        <button onClick={click} className={s.button}>Войти</button>
                    </div>
            </div>
            :
            <div className={s.formContainer}>
                <p className={s.title}>Регистрация</p>
                <form className={s.form} action="">
                <div className={s.inputGroup}>
                <input type="text" placeholder="Введите имя" className={s.input} value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className={s.inputGroup}>
                <input type="text" placeholder="Введите фамилию" className={s.input} value={surname} onChange={e => setSurname(e.target.value)}/>
                </div>
                <div className={s.inputGroup}>
                <input type="text" placeholder="Введите email" className={s.input} value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className={s.inputGroup}>
                <input type="password" placeholder="Введите пароль" className={s.input} value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                </form>
                <p className={s.question}>Есть аккаунт? <NavLink
                        to={LOGIN_ROUTER}>Войдите</NavLink></p>
                    <div className={s.butt}>
                        <button onClick={click} className={s.button}>Зарегистрироваться</button>
                    </div>
            </div>
            }
            
        </div>
        <div className={s.bottomNavbar}>
                <BottomNavbar/>
            </div>
        </div>
    )
})

export default Auth