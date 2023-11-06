import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBoookings/MyBookings";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/rooms',
            element: <Rooms></Rooms>
        },
        {
            path: '/bookings',
            element: <MyBookings></MyBookings>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;