// import { useLoaderData } from "react-router-dom";
import RunningCard from "./RunningCard";
import { useEffect, useState } from "react";

const RunningCampaign = () => {

    // console.log(data);
    const [runingCards, setRuningCards] = useState([])

    const currentDate = new Date()
    const runningDate = runingCards.filter(running => new Date(running.date) > currentDate )


        useEffect(() => {
            fetch('https://a-crowd-funding-project-server-side.vercel.app/addcampaign')
                .then(res => res.json())
                .then(data => {
                    setRuningCards(data)
                })
        }, [])

    return (
        <div className="my-10">
            <h1 className="text-3xl text-center text-[#FFBE46] font-bold bg-slate-800 p-4">Running Campaign</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg: mb-6 mx-10">
                {
                    runningDate.slice(0 - 6).map(campaignCard => <RunningCard key={campaignCard._id} campaignCard={campaignCard}></RunningCard>)
                }
            </div>
        </div>
    );
};

export default RunningCampaign;