import { useLoaderData } from "react-router-dom";
import DonatedCard from "../Components/DonatedCard";

const MyDonations = () => {

    const donatedData = useLoaderData()
    // console.log(donatedData);
    

    return (
        <div>
            <h1 className="text-3xl text-center text-[#FFBE46] font-bold bg-slate-800 p-4">My Donations</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg: mb-6 mx-10">
                {
                    donatedData.length === 0 ? <p className="text-red-500 text-3xl font-bold ">No Data Found</p> : 
                    donatedData.map(donatedCard => <DonatedCard key={donatedCard._id} donatedCard={donatedCard}></DonatedCard>)
                }
            </div>
        </div>
    );
};

export default MyDonations;