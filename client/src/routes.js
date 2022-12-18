import Modal from "./components/Modal/Modal"
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage"
import Auth from "./pages/AuthPage/Auth"
import BasketPage from "./pages/BasketPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import DeliveryPage from "./pages/DeliveryPage/DeliveryPage"
import FavoritePage from "./pages/FavoritePage"
import Home from "./pages/HomePage/Home"
import ProductPage from "./pages/ProductPage/ProductPage"
import UserPage from "./pages/UserPage/UserPage"
import { ABOUTUSPAGE_ROUTER, BASKETPAGE_ROUTER, CONTACTPAGE_ROUTER, DELIVERYPAGE_ROUTER, FAVORITEPAGE_ROUTER, HOME_ROUTER, LOGIN_ROUTER, MODAL_PAGE, PRODUCTPAGE_ROUTER, REGISTRATION_ROUTER, USERPAGE_ROUTER } from "./utils/consts"

// export const authRoutes = [
// {
//     path: FAVORITEPAGE_ROUTER,
//     Component: FavoritePage,
// }
// ]

export const publicRoutes = [
    {
        path: BASKETPAGE_ROUTER,
        Component: BasketPage,
    },
    {
        path: HOME_ROUTER,
        Component: Home,
    },
    {
        path: LOGIN_ROUTER,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTER,
        Component: Auth,
    },
    {
        path: PRODUCTPAGE_ROUTER + '/:id',
        Component: ProductPage,
    },
    {
        path: CONTACTPAGE_ROUTER,
        Component: ContactPage,
    },
    {
        path: ABOUTUSPAGE_ROUTER,
        Component: AboutUsPage,
    },
    {
        path: DELIVERYPAGE_ROUTER,
        Component: DeliveryPage,
    },
    {
        path: USERPAGE_ROUTER,
        Component: UserPage,
    },
    {
        path: MODAL_PAGE,
        Component: Modal,
    },
    {    
    path: FAVORITEPAGE_ROUTER,
    Component: FavoritePage
    }

]