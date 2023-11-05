import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;