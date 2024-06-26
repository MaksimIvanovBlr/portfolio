import {
    ADMIN_ROUTE,
    CONTACTS_ROUTE,
    PROJECTS_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    HOME_ROUTE,
    PROJECT_PAGE_ROUTE,
    FIN_ACC_HOME_ROUTE,
    FIN_ACC_USER_SETTINGS_ROUTE,
    FIN_ACC_DAILY_ROUTE,
    FIN_ACC_SALARY_LIST_ROUTE,
    FIN_ACC_EXPENSES_LIST_ROUTE, FIN_ACC_ADDITIONAL_INCOME_LIST_ROUTE
} from "./utils/consts"
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Admin from "./pages/finAccPages/Admin";
import MainPage from "./pages/finAccPages/MainPage";
import UserSettings from "./pages/finAccPages/UserSettings";
import Auth from "./pages/finAccPages/Auth";
import Daily from "./pages/finAccPages/Daily";
import SalaryListFinApp from "./pages/finAccPages/SalaryListFinApp";
import ExpensesListFinApp from "./pages/finAccPages/ExpensesListFinApp";
import AdditionalIncomeListFinApp from "./pages/finAccPages/AdditionalIncomeListFinApp";

export const authRouts = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: FIN_ACC_HOME_ROUTE,
        Component: MainPage
    },
    {
        path: FIN_ACC_USER_SETTINGS_ROUTE,
        Component: UserSettings
    },
    {
        path: FIN_ACC_DAILY_ROUTE,
        Component: Daily
    },
    {
        path: FIN_ACC_SALARY_LIST_ROUTE,
        Component: SalaryListFinApp
    },
    {
        path: FIN_ACC_EXPENSES_LIST_ROUTE,
        Component: ExpensesListFinApp
    },
    {
        path: FIN_ACC_ADDITIONAL_INCOME_LIST_ROUTE,
        Component: AdditionalIncomeListFinApp
    },

]


export const publicRouts = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PROJECT_PAGE_ROUTE + '/:id',
        Component: ProjectPage
    },
    {
        path: PROJECTS_ROUTE,
        Component: Projects
    }
]