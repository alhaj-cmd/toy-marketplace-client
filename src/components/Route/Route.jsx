import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPages from "../Share/ErrorPages";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Main from "../Pages/Main";
import Blogs from "../Pages/Blogs";
import AllToy from "../Pages/AllToy";
import AddToy from "../Pages/AddToy";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path:'alltoy',
        element:<AllToy></AllToy>
      },
      {
        path:'addtoy',
        element:<AddToy></AddToy>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);


export default router;