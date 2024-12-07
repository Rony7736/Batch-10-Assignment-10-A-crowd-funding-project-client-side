import { useLoaderData } from "react-router-dom";
import CampaignTable from "../Components/CampaignTable";

const AllCampaign = () => {

    const allCampaign = useLoaderData()
    // console.log(allCampaign);
    

    return (
        <div className="py-8"> 
            <h2 className="text-center text-4xl font-bold my-6 text-purple-600">See all the Campaigns here </h2>
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
                                allCampaign.length === 0 ? <p>No Data Found</p> :
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