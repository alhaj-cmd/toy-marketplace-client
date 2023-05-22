
import { Toaster } from 'react-hot-toast';

import { Outlet } from "react-router-dom";
import NavBar from "../Share/NavBar";

import FooTer from "../Share/Footer";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>

            <FooTer></FooTer>
            <Toaster />
        </div>
    );
};

export default Main;