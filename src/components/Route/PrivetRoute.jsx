import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLoaderData } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLoaderData()

    if (loading) {
        return <progress className="progress w-56"></progress>
    }


    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace={true}></Navigate>

};

export default PrivetRoute;