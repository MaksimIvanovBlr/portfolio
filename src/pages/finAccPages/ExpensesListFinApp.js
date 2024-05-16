import React, {useContext} from 'react';
import {Context} from "../../index";
import NavbarFinAcc from "../../components/finAccComponents/NavbarFinAcc";
import ListFinAppComponent from "../../components/finAccComponents/ListFinAppComponent";

const ExpensesListFinApp = () => {
    const {expenses} = useContext(Context)
    return (
        <>
            <NavbarFinAcc />
            <ul>
                {expenses.expenses.map((sal) =>{
                    return(
                        <ListFinAppComponent
                            key = {sal.index}
                            name = {sal.name}
                            value = {sal.value}
                            status = {sal.status}
                            date = {sal.date}
                        />
                    )
                })}

            </ul>

        </>
    );
};

export default ExpensesListFinApp;