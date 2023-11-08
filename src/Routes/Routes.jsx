import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBoookings/MyBookings";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import AboutUs from "../pages/AboutUs/AboutUs";

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
            element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
            // loader: ({params})=> fetch(`https://innsight-server.vercel.app/bookings/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path:'/aboutUs',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/roomDetails/:id',
          element: <RoomDetails></RoomDetails>,
          loader: ({params})=> fetch(`https://innsight-server.vercel.app/rooms/${params.id}`)
        }
      ]
    },
  ]);

  export default router;