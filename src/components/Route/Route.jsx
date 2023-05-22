import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPages from "../Share/ErrorPages";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Main from "../Pages/Main";
import Blogs from "../Pages/Blogs";
import AllToy from "../Pages/AllToy";
import AddToy from "../Pages/AddToy";
import MyToys from "../Pages/MyToys";
import ToyDetails from "../Pages/ToyDetails";
import PrivetRoute from "./PrivetRoute";


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
        element:<AllToy></AllToy>,
        loader: () => fetch('https://toy-marketplace-server-murex.vercel.app/allCategory')
      },
      {
        path:'addtoy',
        element:<PrivetRoute><AddToy></AddToy></PrivetRoute>
      },
      {
        path:'myToys',
        element:<MyToys></MyToys>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path:'toyDetails/:id',
        element:<PrivetRoute><ToyDetails></ToyDetails></PrivetRoute>,
        loader:({params}) => fetch(`https://toy-marketplace-server-murex.vercel.app/allCategory/${params.id}`)
      }
    ]
  },
]);


export default router;