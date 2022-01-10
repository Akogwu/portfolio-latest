import React from 'react';
import {Routes, Route} from "react-router";
import Home from "../index";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={Home}/>
        </Routes>
    );
};

export default Routers;