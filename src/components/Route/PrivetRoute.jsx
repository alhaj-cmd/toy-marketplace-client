import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext)

    if(user){
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>
    
};

export default PrivetRoute;