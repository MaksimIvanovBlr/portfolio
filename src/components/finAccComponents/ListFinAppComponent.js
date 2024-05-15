import React from 'react';

const ListFinAppComponent = (props) => {
    return (
        <ul>
            {props.map((salary) =>{
                return(
                    <li>
                        name: {salary.name}
                        value: {salary.value}
                        status: {salary.status}
                        date: {salary.date}
                    </li>
                )
            })}
        </ul>
    );
};

export default ListFinAppComponent;