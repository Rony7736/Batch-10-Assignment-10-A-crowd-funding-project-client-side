import { useLoaderData } from "react-router-dom";
import MyCampaignTable from "../Components/MyCampaignTable";
import { useState } from "react";

const MyCampaign = () => {
    const data = useLoaderData()

    const [campaignData, setCampaignData] = useState(data)
    return (
        <div className="py-8">
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
                                campaignData.length === 0 ? <p>No Data Found</p> :
                                campaignData.map((campaign, index) => <MyCampaignTable key={campaign?._id} idx={index} campaign={campaign} campaignData={campaignData} setCampaignData={setCampaignData}></MyCampaignTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCampaign;