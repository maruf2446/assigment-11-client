import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddToy from "../components/AddToy/AddToy";
import AllToys from "../components/AllToys/AllToys";
import Details from "../components/Details/Details";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Blog from "../Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/toy')
      },
      {
        path:"/Blog",
        element:<Blog></Blog>
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>
      },
      {
        path: "/alltoy",
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/toy')
      },
      {
        path:"/details/:id",
          element: <Details></Details>,
          loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element: <SignUp></SignUp>
      }
      
      
    ]
  },
]);


export default router;