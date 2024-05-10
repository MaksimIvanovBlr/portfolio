import React from 'react';

const Admin = () => {
    return (
        <div>
            <a href="#!" className="btnFin">бюджет</a>
            <a href="#!" className="btnFin">дневной остаток</a>
            <a href="#!" className="btnFin">user settings </a>
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