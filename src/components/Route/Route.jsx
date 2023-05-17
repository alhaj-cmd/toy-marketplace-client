import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPages from "../Share/ErrorPages";
import Login from "../Pages/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement:<ErrorPages></ErrorPages>,
      children:[
        {
            path:'login',
            element:<Login></Login>
        }
      ]
    },
  ]);


export default router;