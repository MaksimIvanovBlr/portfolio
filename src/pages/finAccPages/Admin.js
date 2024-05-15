import React from 'react';
import NavbarFinAcc from "../../components/finAccComponents/NavbarFinAcc";

const Admin = () => {
    return (
        <div>
            <NavbarFinAcc />
            <ul>
                <li className='list-acc'>
                    пользователи
                </li>
                <li className='list-acc'>
                    посетители сайта
                </li>
                <li className='list-acc'>
                    заблокированные пользователи
                </li>
                <li className='list-acc'>
                    закрыть регистарцию
                </li>

            </ul>
        </div>
    );
};

export default Admin;