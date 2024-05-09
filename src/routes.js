import {
    ADMIN_ROUTE,
    CONTACTS_ROUTE,
    PROJECTS_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    HOME_ROUTE,
    PROJECT_PAGE_ROUTE
} from "./utils/consts"
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";

export const authRouts = [
    {
        path: ADMIN_ROUTE,
        Component: 'admin component'
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
        Component: 'auth'
    },
    {
        path: REGISTRATION_ROUTE,
        Component: 'registration'
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