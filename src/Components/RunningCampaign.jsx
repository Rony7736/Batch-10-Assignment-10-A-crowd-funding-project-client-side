import { useLoaderData } from "react-router-dom";
import RunningCard from "./RunningCard";

const RunningCampaign = () => {

    const data = useLoaderData()
    // console.log(data);

    return (
        <div className="my-10">
            <h1 className="text-3xl text-center text-[#FFBE46] font-bold bg-slate-800 p-4">Running Campaign</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg: mb-6 mx-10">
                {
                    data.map(campaignCard => <RunningCard key={campaignCard._id} campaignCard={campaignCard}></RunningCard>)
                }
            </div>
        </div>
    );
};

export default RunningCampaign;