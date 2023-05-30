import React from 'react';
import './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants';
import { NavigationBar } from './Components/NavigationBar';
import { Main } from './Components/Main';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavigationBar routes={ROUTES} />
                <Routes>
                    <>
                        {ROUTES.map(route => {
                            return <Route key={route.id} path={route.value} element={<Main type={route.type} />} />;
                        })}
                    </>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
