import React, {useContext} from 'react';
import './style.css'
import {Context} from "../../index";
import {dayToSalary} from "../../utils/finAppCalculation/dateCalculation";
import {
    dailyExpForMonth,
    predictedBalance,
    sumOfTrueOrFalseValue,
} from "../../utils/finAppCalculation/simpleCalculation";
import {
    FIN_ACC_DAILY_ROUTE,
    FIN_ACC_HOME_ROUTE,
    FIN_ACC_SALARY_LIST_ROUTE,
    FIN_ACC_USER_SETTINGS_ROUTE
} from "../../utils/consts";
import NavbarFinAcc from "../../components/finAccComponents/NavbarFinAcc";
import {NavLink} from "react-router-dom";


const MainPage = () => {
const { userInfo, expenses, salary, additionalIncome } = useContext(Context)


    const toSalary = dayToSalary(userInfo.salaryDay)
    const monthlyBasicIncome = sumOfTrueOrFalseValue(salary.salary, true)
    const forMonth = dailyExpForMonth(userInfo.valuePerDay, toSalary)
    const unpaidPayments = sumOfTrueOrFalseValue(expenses.expenses, false)
    const userReservValue = userInfo.reservValue
    const unusedAdditionalIncomes = sumOfTrueOrFalseValue(additionalIncome.additonalIncome, true)
    const userBufferMoney = userInfo.bufferMoney
    const  userPredictBalance = predictedBalance( forMonth, unpaidPayments,userReservValue, userBufferMoney, unusedAdditionalIncomes)
    const userInputBalanceValue = userInfo.realBalance


    return (
        <div className='main-page'>
            <NavbarFinAcc />
            <ul>
                <NavLink to={FIN_ACC_SALARY_LIST_ROUTE} state={'salary'}>
                <li className='list-acc'>
                     Основной доход за месяц: {monthlyBasicIncome}
                </li>
                </NavLink>
                <li className='list-acc'>
                    Дней до зарплаты: {toSalary}
                </li>
                <li className='list-acc'>
                    На ежедневные расходы до конца месяца: {forMonth}
                </li>
                <li className='list-acc'>
                    Сумма не оплаченых платежей: {unpaidPayments}
                </li>
                <li className='list-acc'>
                    Резерв: {userReservValue}
                </li>
                <li className='list-acc'>
                    "Буфферные деньги": {userBufferMoney}
                </li>
                <li className='list-acc'>
                    Прогнозируемый остаток на карте: {userPredictBalance}
                </li>
                <li className='list-acc'>
                    Действительный баланс карты: {userInputBalanceValue}
                </li>
                <li className='list-acc'>
                    Неиспользованые дополнительные доходы: {unusedAdditionalIncomes}
                </li>
                <li className='list-acc'>
                    Реальный баланс карты: _______поле воода <p className='ok'>ok</p>
                </li>
            </ul>
        </div>
    );
};

export default MainPage;