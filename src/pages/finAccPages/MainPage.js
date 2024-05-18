import React, {useContext, useState} from 'react';
import './style.css'
import {Context} from "../../index";
import {dayToSalary} from "../../utils/finAppCalculation/dateCalculation";
import {
    dailyExpForMonth,
    predictedBalance,
    sumOfTrueOrFalseValue,
} from "../../utils/finAppCalculation/simpleCalculation";
import {
    FIN_ACC_ADDITIONAL_INCOME_LIST_ROUTE,
    FIN_ACC_EXPENSES_LIST_ROUTE,
    FIN_ACC_SALARY_LIST_ROUTE,
    FIN_ACC_USER_SETTINGS_ROUTE
} from "../../utils/consts";
import NavbarFinAcc from "../../components/finAccComponents/NavbarFinAcc";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";


const MainPage = observer(() => {
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

    const [inputRealBalance, setInputRealBalance] = useState(userInfo.realBalance)


    const handleRealBalanceInput = (e) => {
        setInputRealBalance(e.target.value)
    }

    const handleSave = () => {
        userInfo.setRealBalance(inputRealBalance)

    }


    return (
        <div className='main-page'>
            <NavbarFinAcc />
            <ul>
                <NavLink to={FIN_ACC_SALARY_LIST_ROUTE} >
                <li className='list-acc'>
                     Основной доход за месяц: {monthlyBasicIncome}
                </li>
                </NavLink>

                <NavLink to={FIN_ACC_USER_SETTINGS_ROUTE}>
                    <li className='list-acc'>
                        Дней до зарплаты: {toSalary}
                    </li>
                </NavLink>


                <NavLink to={FIN_ACC_USER_SETTINGS_ROUTE}>
                    <li className='list-acc'>
                        На ежедневные расходы до конца месяца: {forMonth}
                    </li>
                </NavLink>


                <NavLink to={FIN_ACC_EXPENSES_LIST_ROUTE}>
                <li className='list-acc'>
                    Сумма не оплаченых платежей: {unpaidPayments}
                </li>
                </NavLink>

                <NavLink to={FIN_ACC_USER_SETTINGS_ROUTE}>
                    <li className='list-acc'>
                        Резерв: {userReservValue}
                    </li>
                </NavLink>

                <NavLink to={FIN_ACC_USER_SETTINGS_ROUTE}>
                    <li className='list-acc'>
                        "Буфферные деньги": {userBufferMoney}
                    </li>
                </NavLink>


                <li className='list-acc'>
                    Прогнозируемый остаток на карте: {userPredictBalance}
                </li>

                <li className='list-acc'>
                    Действительный баланс карты: {userInfo.realBalance}
                </li>

                <NavLink to={FIN_ACC_ADDITIONAL_INCOME_LIST_ROUTE}>
                <li className='list-acc'>
                    Неиспользованые дополнительные доходы: {unusedAdditionalIncomes}
                </li>
                </NavLink>

                <li className='list-acc'>
                    Введите баланс карты:
                    <input
                        className='input-value'
                        type="number"
                        value={inputRealBalance}
                        onChange={handleRealBalanceInput}
                        placeholder="Введите реальный баланс карты"
                    />
                    <p onClick={handleSave} className='ok'>ok</p>
                </li>
            </ul>
        </div>
    );
});

export default MainPage;