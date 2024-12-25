import { useLoaderData } from "react-router-dom";
import CampaignTable from "../Components/CampaignTable";
import { useState } from "react";

const AllCampaign = () => {

    const allCampaign = useLoaderData()
    // console.log(allCampaign);
    const [sortedCampaignData, setsortedCampaignData] = useState(allCampaign);

    const handleSort = () => {
        const sortedData = [...sortedCampaignData].sort((a, b) => b.amount - a.amount);
        setsortedCampaignData(sortedData);
    };

    return (
        <div className="pb-8">
            <h1 className="text-3xl text-center text-[#FFBE46] font-bold bg-slate-800 p-4">All Campaigns: {sortedCampaignData.length}</h1>
            <div className="flex justify-end mx-16 my-6">
                <button onClick={handleSort} className="bg-blue-500 py-2 px-6 text-white font-semibold">Sort By Price</button>
            </div>
            <div className="w-11/12 mx-auto bg-slate-50">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>serial</th>
                                <th>Title</th>
                                <th>Campaign Type</th>
                                <th>Donation Amount</th>
                                <th>Deadline</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sortedCampaignData.length === 0 ? <p className="text-red-500 text-lg font-bold">No Data Found</p> :
                                sortedCampaignData.map((campaign, index) => <CampaignTable key={campaign?._id} idx={index} campaign={campaign}></CampaignTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllCampaign;