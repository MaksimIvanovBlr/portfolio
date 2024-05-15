import React, {useContext} from 'react';
import NavbarFinAcc from "../../components/finAccComponents/NavbarFinAcc";
import ListFinAppComponent from "../../components/finAccComponents/ListFinAppComponent";
import {useLocation} from "react-router-dom";
import {Context} from "../../index";

const FinAppList = () => {
    const { userInfo, expenses, salary, additionalIncome } = useContext(Context)
    let location = useLocation()
    console.log(location.state)
    let infoInProps
    switch (location.state){
        case 'salary': infoInProps = salary.salary
            break
        case 'expences': infoInProps = expenses.expenses
            break
        case 'additionalIncome': infoInProps = additionalIncome.additonalIncome
            break
    }
    console.log(infoInProps)
    return (
        <>
            <NavbarFinAcc />
            <ListFinAppComponent props={ infoInProps} />
        </>
    );
};

export default FinAppList;