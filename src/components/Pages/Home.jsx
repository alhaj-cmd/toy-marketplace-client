import { Outlet } from "react-router-dom";
import Header from "./Header";
import useTitle from "./useTitle";



const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;