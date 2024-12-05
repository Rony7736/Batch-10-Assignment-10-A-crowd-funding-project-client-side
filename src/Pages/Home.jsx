import Banner from "../Components/Banner";


const Home = () => {
    return (
        <div className="">
            <div className="bg-blue-400">
                <h2 className="text-2xl lg:text-5xl text-[#E5E805] text-center font-bold py-3">Wellcome to Crowdcube</h2>
                <p className="text-xl text-center font-semibold pb-2">It is A Crowd Funding Donatation Application</p>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Home;