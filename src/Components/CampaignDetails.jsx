import { useLoaderData } from "react-router-dom";
import Deatails from "./Deatails";

const CampaignDetails = () => {

    const campaignData = useLoaderData();
    const {photo, title, campaigntype, description, amount, date, email, name} = campaignData

    return (
        <div>
            <h2>deatils: {campaignData.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg: mb-6 mx-10">
                {
                    campaignData.map(campaign => <Deatails key={campaign._id} campaign={campaign}></Deatails>)
                }
            </div>
        </div>
    );
};

export default CampaignDetails;