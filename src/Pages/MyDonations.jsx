import { useLoaderData } from "react-router-dom";
import DonatedCard from "../Components/DonatedCard";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const MyDonations = () => {

    const {user} = useContext(authContext)
    // const donatedData = useLoaderData()
    // console.log(donatedData);
    const [donated, setDonated] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/donated?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setDonated(data))
    }, [])
    

    return (
        <div>
            <h1 className="text-3xl text-center text-[#FFBE46] font-bold bg-slate-800 p-4">My Donations</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg: mb-6 mx-10">
                {
                    donated.length === 0 ? <p className="text-red-500 text-3xl font-bold ">No Data Found</p> : 
                    donated.map(donatedCard => <DonatedCard key={donatedCard._id} donatedCard={donatedCard}></DonatedCard>)
                }
            </div>
        </div>
    );
};

export default MyDonations;