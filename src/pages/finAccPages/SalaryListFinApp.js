import React, {useContext} from 'react';
import NavbarFinAcc from "../../components/finAccComponents/NavbarFinAcc";
import ListFinAppComponent from "../../components/finAccComponents/ListFinAppComponent";
import {Context} from "../../index";
import {values} from "mobx";

const SalaryListFinApp = () => {
    const {salary} = useContext(Context)
    return (
        <>
            <NavbarFinAcc />
            <ul>
                {salary.salary.map((sal) =>{
                    return(

                        <ListFinAppComponent
                            key = {sal.index}
                            name = {sal.name}
                            value = {sal.value}
                            status = {sal.status}
                            date = {sal.date}
                            type = 'salary'
                        />
                    )

                })}

            </ul>

        </>
    );
};

export default SalaryListFinApp;