import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRouts, publicRouts } from '../../routes';
import {HOME_ROUTE} from "../../utils/consts";
import {Context} from "../../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    // const isAuth = true
    return (
        <Routes>
            {user.isAuth && authRouts.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}

            {publicRouts.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}

            <Route path='*' element={<Navigate to={HOME_ROUTE}/>} />
        </Routes>
    );
};

export default AppRouter;