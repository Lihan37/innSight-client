import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBoookings/MyBookings";

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

      ]
    },
  ]);

  export default router;