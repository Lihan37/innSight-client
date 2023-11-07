import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBoookings/MyBookings";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../pages/RoomDetails/RoomDetails";

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
            element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
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
          path: '/roomDetails/:id',
          element: <RoomDetails></RoomDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/rooms/${params.id}`)
        }
      ]
    },
  ]);

  export default router;