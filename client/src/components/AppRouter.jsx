import React from "react";
import { useContext } from "react";
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";
import { HOME_ROUTER } from "../utils/consts";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
const AppRouter = () => {
    const {user} = useContext(Context)
    // const location = useLocation()
    // const isHome = location.pathname === HOME_ROUTER
    return(
        <div>
            {/* {isHome ? <MainHeader/> : <Header/>} */}
        <Header/>
        <Routes>
            {/* {user.isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component/>}/>
            )} */}
             {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component/>}/>
            )}
             <Route path='*' element={<Navigate to={HOME_ROUTER}/>} />
        </Routes>
        <Footer/>
        </div>
    )
}

export default AppRouter