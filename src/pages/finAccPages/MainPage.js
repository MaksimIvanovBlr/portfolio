import React from 'react';
import './style.css'
const MainPage = () => {
    return (
        <div className='main-page'>

            <a href="#!" className="btnFin">бюджет</a>
            <a href="#!" className="btnFin">дневной остаток</a>
            <a href="#!" className="btnFin">user settings </a>
            <ul>
                <li className='list-acc'>
                   Основной доход за месяц: 4000
                </li>
                <li className='list-acc'>
                    Дней до зарплаты: 30
                </li>
                <li className='list-acc'>
                    На ежедневные расходы до конца месяца: 1000
                </li>
                <li className='list-acc'>
                    Сумма не оплаченых платежей: 5
                </li>
                <li className='list-acc'>
                    Резерв: 1500
                </li>
                <li className='list-acc'>
                    "Буфферные деньги": 500
                </li>
                <li className='list-acc'>
                    Прогнозируемый остаток на карте: 2000
                </li>
                <li className='list-acc'>
                    Действительный баланс карты: 2000
                </li>
                <li className='list-acc'>
                    Реальный баланс карты: _______поле воода <p className='ok'>ok</p>
                </li>
            </ul>
        </div>
    );
};

export default MainPage;