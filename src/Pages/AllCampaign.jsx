import { useLoaderData } from "react-router-dom";
import CampaignTable from "../Components/CampaignTable";

const AllCampaign = () => {

    const allCampaign = useLoaderData()
    // console.log(allCampaign);


    return (
        <div className="pb-8">
            <h1 className="text-3xl text-center text-[#FFBE46] font-bold bg-slate-800 p-4">See all the Campaigns here</h1>
            <div className="flex justify-end mx-16 my-6">
                <button className="bg-blue-500 py-2 px-6 text-white font-semibold">Sort By Price</button>
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
                                allCampaign.length === 0 ? <p className="text-red-500 text-lg font-bold">No Data Found</p> :
                                    allCampaign.map((campaign, index) => <CampaignTable key={campaign?._id} idx={index} campaign={campaign}></CampaignTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllCampaign;