import React, { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import s from "./Auth.module.css";
import {
  HOME_ROUTER,
  LOGIN_ROUTER,
  REGISTRATION_ROUTER,
} from "../../utils/consts";
import { observer } from "mobx-react-lite";
import { getUserInformation, login, registration } from "../../http/userAPI";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../..";
import BottomNavbar from "../../components/BottomNavBar/BottomNavbar";
import Cookies from "universal-cookie";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTER;
  const [err, setErr] = useState(false);
  const isAuth = user.isAuth;
  console.log(isAuth);

  // const [name, setName] = useState('')
  // const [surname, setSurname] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  let cookie = new Cookies();

  // const click = async () => {
  //     try {
  //         let data;
  //         if (isLogin) {
  //             data = await login(email, password);
  //         } else {
  //             data = await registration(name,surname,email, password);
  //         }
  //         user.setUser(user)
  //         user.setIsAuth(true)
  //        navigate(HOME_ROUTER)
  //     } catch (e) {
  //         alert(e.response.data.message)
  //     }
  // }
  useEffect(() => {
    window.scrollTo(0, 0);
    if (isAuth) {
      setErr(false);
      navigate(HOME_ROUTER);
    }
  }, [isAuth, err]);

  const click = () => {
    if (isLogin) {
      login(data.email, data.password)
        .then((token) => {
          user.setIsAuth(true);
          getUserInformation(token.id)
            .then((data) => {
              user.setUser(data);
              cookie.set("id", token.id, {
                path: "/",
                maxAge: 60 * 60 * 24,
                sameSite: "strict",
                secure: true,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
          setErr(true)
        });
    } else {
      registration(data.name, data.surname, data.email, data.password)
        .then((token) => {
          user.setIsAuth(true);
          getUserInformation(token.id)
            .then((data) => {
              user.setUser(data);
              cookie.set("id", token.id, {
                path: "/",
                maxAge: 60 * 60 * 24,
                sameSite: "strict",
                secure: true,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
          setErr(true)
        });
    }
    setTimeout(()=> {
        if(!isAuth)
        setErr(true)
    }, 100)
  };
  return (
    <div>
      <div className={s.container}>
        {isLogin ? (
          <div className={s.formContainer}>
            <p className={s.title}>Вход</p>
            {
                err ? 
                <p>Неправильный логин или пароль</p>
                :
                <></>
            }
            <form className={s.form} action="">
              <div className={s.inputGroup}>
                <input
                  type="text"
                  placeholder="Введите email"
                  className={s.input}
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className={s.inputGroup}>
                <input
                  type="password"
                  placeholder="Введите пароль"
                  className={s.input}
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
            </form>
            <p className={s.question}>
              Нет аккаунта?{" "}
              <NavLink to={REGISTRATION_ROUTER}>Зарегистрируйтесь</NavLink>
            </p>
            <div className={s.butt}>
              <button onClick={click} className={s.button}>
                Войти
              </button>
            </div>
          </div>
        ) : (
          <div className={s.formContainer}>
            <p className={s.title}>Регистрация</p>
            <form className={s.form} action="">
              <div className={s.inputGroup}>
                <input
                  type="text"
                  placeholder="Введите имя"
                  className={s.input}
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div className={s.inputGroup}>
                <input
                  type="text"
                  placeholder="Введите фамилию"
                  className={s.input}
                  value={data.surname}
                  onChange={(e) =>
                    setData({ ...data, surname: e.target.value })
                  }
                />
              </div>
              <div className={s.inputGroup}>
                <input
                  type="text"
                  placeholder="Введите email"
                  className={s.input}
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className={s.inputGroup}>
                <input
                  type="password"
                  placeholder="Введите пароль"
                  className={s.input}
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
            </form>
            <p className={s.question}>
              Есть аккаунт? <NavLink to={LOGIN_ROUTER}>Войдите</NavLink>
            </p>
            <div className={s.butt}>
              <button onClick={click} className={s.button}>
                Зарегистрироваться
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={s.bottomNavbar}>
        <BottomNavbar />
      </div>
    </div>
  );
});

export default Auth;
