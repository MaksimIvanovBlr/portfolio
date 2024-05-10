import React from 'react';

const UserSettings = () => {
    return (
        <div>
            <a href="#!" className="btnFin">бюджет</a>
            <a href="#!" className="btnFin">дневной остаток</a>
            <a href="#!" className="btnFin">user settings </a>
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