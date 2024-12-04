import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";



const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;