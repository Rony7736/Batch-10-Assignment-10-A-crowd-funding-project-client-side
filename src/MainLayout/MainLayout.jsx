import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="lg:w-[1440px] mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="lg:w-[1440px] mx-auto">
                <Outlet></Outlet>
            </div>
            <div className="lg:w-[1440px] mx-auto">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;