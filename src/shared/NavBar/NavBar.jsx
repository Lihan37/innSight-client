import { Link, useLocation } from "react-router-dom";
import '../NavBar/navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {

    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () =>{
      logOut()
      .then()
      .catch()
  }

    const navItems = (
        <>
          <li>
            <Link
              to='/'
              className={`hover:text-white ${location.pathname === '/' ? 'bg-active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/rooms'
              className={`hover:text-white ${location.pathname === '/rooms' ? 'bg-active' : ''}`}
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              to='/bookings'
              className={`hover:text-white ${location.pathname === '/bookings' ? 'bg-active' : ''}`}
            >
              My Bookings
            </Link>
          </li>
          <li>
            <Link
              to='/signUp'
              className={`hover:text-white ${location.pathname === '/signUp' ? 'bg-active' : ''}`}
            >
              Sign Up
            </Link>
          </li>
        </>
      );
      

    return (
        <div className="navbar bg-gradient-to-r from-purple-950 to-blue-950 p-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-gray-300 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 lg:text-gray-300 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <span className="text-yellow-300">Inn<span className="text-gray-300">Sight</span></span>
                </Link>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="gap-10 items-center text-center lg:text-gray-300  menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

            <div className="navbar-end">
                {user ? (
                    <>
                    <li><Link to="/bookings">My Bookings</Link></li>
                    <div className="flex items-center">
                        <img src={user.photoURL} alt="User Photo" className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-yellow-200 mr-2">{user.email}</span>
                        <button onClick={handleSignOut} className='btn'>Sign Out</button>
                    </div>
                    </>
                ) : (
                    <Link to='/login'>
                        <button className='btn'>Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;