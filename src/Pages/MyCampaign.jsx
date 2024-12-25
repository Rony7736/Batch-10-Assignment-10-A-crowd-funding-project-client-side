
import MyCampaignTable from "../Components/MyCampaignTable";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const MyCampaign = () => {
    const {user} = useContext(authContext)

    const [campaignData, setCampaignData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/mycampaign", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json" 
            },
            body : JSON.stringify({email : user.email})
        })
        .then(res => res.json())
        .then(data => {
            setCampaignData(data)
        })
        
    }, [])

    
    return (
        <div className="pb-8">
            <h1 className="text-3xl text-center text-[#FFBE46] font-bold bg-slate-800 p-4">My Campaigns</h1>
            <div className="w-11/12 mx-auto bg-slate-50 my-8">
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
                                campaignData.length === 0 ? <p className="text-red-500 text-lg font-bold">No Data Found</p> :
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