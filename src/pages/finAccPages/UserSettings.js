import React from 'react';
import NavbarFinAcc from "../../components/finAccComponents/NavbarFinAcc";
import {NavLink} from "react-router-dom";
import {
    FIN_ACC_ADDITIONAL_INCOME_LIST_ROUTE,
    FIN_ACC_EXPENSES_LIST_ROUTE,
    FIN_ACC_SALARY_LIST_ROUTE
} from "../../utils/consts";

const UserSettings = () => {
    return (
        <div>
            <NavbarFinAcc />
            <ul>

                <NavLink to={FIN_ACC_EXPENSES_LIST_ROUTE}
>                   <li className='list-acc'>
                        Расходы
                    </li>
                </NavLink>

                <NavLink to={FIN_ACC_SALARY_LIST_ROUTE}>
                    <li className='list-acc'>
                        Основной доход
                    </li>
                </NavLink>

                <NavLink to={FIN_ACC_ADDITIONAL_INCOME_LIST_ROUTE}>
                    <li className='list-acc'>
                        Дополнительный доход
                    </li>
                </NavLink>


                    <li className='list-acc'>
                        Изменить резерв
                    </li>



                    <li className='list-acc'>
                        Основные данные
                    </li>



                    <li className='list-acc'>
                        Пересчитать резерв
                    </li>


            </ul>
        </div>
    );
};

export default UserSettings;