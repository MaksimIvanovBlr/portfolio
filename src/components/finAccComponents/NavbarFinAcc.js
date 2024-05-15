import React from 'react';
import {FIN_ACC_DAILY_ROUTE, FIN_ACC_HOME_ROUTE, FIN_ACC_USER_SETTINGS_ROUTE} from "../../utils/consts";

const NavbarFinAcc = () => {
    return (
        <div>
            <a href= {FIN_ACC_USER_SETTINGS_ROUTE} className="btnFin">user settings  </a>
            <a href={FIN_ACC_HOME_ROUTE} className="btnFin">бюджет</a>
            <a href={FIN_ACC_DAILY_ROUTE} className="btnFin">дневной остаток</a>
        </div>
    );
};

export default NavbarFinAcc;