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


        </li>
    );
};

export default ListFinAppComponent;