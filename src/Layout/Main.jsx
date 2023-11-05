import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";

const Main = () => {
    return (
        <div className="font-poppins relative min-h-screen">
            <NavBar></NavBar>
            
            <Outlet></Outlet>
            
            <div className="absolute inset-x-0 bottom-0 bg-white">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;
