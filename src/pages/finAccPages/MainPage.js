import React, {useContext} from 'react';
import './style.css'
import {Context} from "../../index";
import {dayToSalary} from "../../utils/finAppCalculation/dateCalculation";
import {sumOfTrueValue} from "../../utils/finAppCalculation/simpleCalculation";


const MainPage = () => {
const {user, userInfo, expenses, salary, additionalIncome} = useContext(Context)


    const toSalary = dayToSalary(userInfo.salaryDay)
    const monthlyBasicIncome = sumOfTrueValue(salary.salary)
    console.log(toSalary)

    return (
        <div className='main-page'>
            <a href="#!" className="btnFin">user settings  </a>
            <a href="#!" className="btnFin">бюджет</a>
            <a href="#!" className="btnFin">дневной остаток</a>
            <ul>
                <li className='list-acc'>
                   Основной доход за месяц: {monthlyBasicIncome}
                </li>
                <li className='list-acc'>
                    Дней до зарплаты: {toSalary}
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