import React from 'react';
import NavbarFinAcc from "../../components/finAccComponents/NavbarFinAcc";

const UserSettings = () => {
    return (
        <div>
            <NavbarFinAcc />
            <ul>
                <li className='list-acc'>
                    Расходы
                </li>
                <li className='list-acc'>
                    Основной доход
                </li>
                <li className='list-acc'>
                    Дополнительный доход
                </li>
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