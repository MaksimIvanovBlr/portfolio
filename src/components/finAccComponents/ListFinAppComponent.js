import React from 'react';

const ListFinAppComponent = (props) => {
    let statusName = 'not active'
    if(props.status === true){
        statusName = 'active'
    }
    return (
            <li className='list-acc'>
                {props.name} |
                {props.value} |
                {statusName} |
                {props.date} |
                {props.type}
                <p className='ok'>edit/detail</p>
            </li>


    );
};

export default ListFinAppComponent;