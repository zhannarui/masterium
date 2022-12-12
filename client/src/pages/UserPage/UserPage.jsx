import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Context } from "../..";
import s from './UserPage.module.css'

const UserPage = observer(() => {
    const {user} = useContext(Context)
    return(
        <div>
            <div className={s.container}>
                <h1 className={s.title}>Мой Профиль</h1>
                <div className={s.info}>
                    <div>{user.name}</div>
                    <div>{user.surname}</div>
                </div>
            </div>
        </div>
    )
})

export default UserPage