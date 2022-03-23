import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { app_routes } from '../routes';
import { Layout } from "./Layout/Layout";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path={app_routes[0].path} element={<Layout />}>
                    {
                        app_routes.map((el)=>{
                            return <Route key={el.path} path={el.path} element={el.Component}/>
                        })
                    }
                </ Route>
            </Routes>
        </>
    );
};

export default AppRouter;