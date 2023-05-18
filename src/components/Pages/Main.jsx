// import React from 'react';

import { Outlet } from "react-router-dom";
import NavBar from "../Share/NavBar";
import FooTer from "../Share/Footer";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <FooTer></FooTer>
        </div>
    );
};

export default Main;