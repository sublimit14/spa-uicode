import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import CasesPage from "./pages/CasesPage/CasesPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import {
    ABOUT_PAGE_ROUTE,
    CASES_PAGE_ROUTE,
    CONTACTS_PAGE_ROUTE,
    MAIN_PAGE_ROUTE,
    SERVICES_PAGE_ROUTE,
    LOGIN_PAGE_ROUTE
} from "./utils/const";


export const app_routes = [
    {
        name: 'Главная страница',
        path: MAIN_PAGE_ROUTE,
        Component: <MainPage />
    },
    {
        name: 'Аутентификация',
        path: LOGIN_PAGE_ROUTE,
        Component: <LoginPage />
    },
    {
        name: 'О нас',
        path: ABOUT_PAGE_ROUTE,
        Component: <AboutPage />
    },
    {
        name: 'Услуги',
        path: SERVICES_PAGE_ROUTE,
        Component: <ServicesPage />
    },
    {
        name: 'Наши работы',
        path: CASES_PAGE_ROUTE,
        Component: <CasesPage />
    },
    {
        name: 'Контакты',
        path: CONTACTS_PAGE_ROUTE,
        Component: <ContactsPage />
    }
]