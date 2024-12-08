import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import FAQ from "../Components/FAQ";



const Home = () => {
    return (
        <div className="">
            <div className="bg-blue-400">
                <h2 className="text-2xl lg:text-5xl text-[#E5E805] text-center font-bold py-3">Wellcome to Crowdcube</h2>
                <p className="text-xl text-center font-semibold pb-2">It is A Crowd Funding Donatation Application</p>
            </div>
            <Banner></Banner>
            <Outlet></Outlet>
            <Contact></Contact>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;