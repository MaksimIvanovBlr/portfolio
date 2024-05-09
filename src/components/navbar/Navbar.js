import React from 'react';
import "./style.css"
import {NavLink} from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import {CONTACTS_ROUTE, HOME_ROUTE, PROJECTS_ROUTE} from "../../utils/consts";

const Navbar = (props) => {

    const activeLink = 'nav-list__link nav-list__link--active'
    const normalLink = 'nav-list__link'
return(
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to={HOME_ROUTE} className="logo">
                    <strong>Portfolio</strong>
                </NavLink>
                <BtnDarkMode />



                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to={HOME_ROUTE} className={({isActive})=>  isActive ? activeLink: normalLink}>
                            Home
                        </NavLink>
                    </li>


                    <li className="nav-list__item">
                        <NavLink to={PROJECTS_ROUTE} className={({isActive})=>  isActive ? activeLink: normalLink}>
                            Projects
                        </NavLink>
                    </li>


                    <li className="nav-list__item">
                        <NavLink to={CONTACTS_ROUTE} className={({isActive})=>  isActive ? activeLink: normalLink}>
                            Contacts
                        </NavLink>
                    </li>


                </ul>
            </div>
        </div>
    </nav>
)};

export default Navbar;