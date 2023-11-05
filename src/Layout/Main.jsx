import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";

const Main = () => {
  return (
    <div className="font-poppins relative min-h-screen flex flex-col">
      <NavBar></NavBar>
      
      <div className="container mx-auto flex-grow">
        <Outlet></Outlet>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default Main;
