import Auth from "./pages/AuthPage/Auth"
import BasketPage from "./pages/BasketPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import FavoritePage from "./pages/FavoritePage"
import Home from "./pages/HomePage/Home"
import ProductPage from "./pages/ProductPage/ProductPage"
import { BASKETPAGE_ROUTER, CONTACTPAGE_ROUTER, FAVORITEPAGE_ROUTER, HOME_ROUTER, LOGIN_ROUTER, PRODUCTPAGE_ROUTER, REGISTRATION_ROUTER } from "./utils/consts"

export const authRoutes = [
{
    path: FAVORITEPAGE_ROUTER,
    Component: FavoritePage,
}
]

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
    }

]