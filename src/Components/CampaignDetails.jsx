import { useLoaderData, useParams } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
// import { verifyDeadline } from "./hook/DateLine";

const CampaignDetails = () => {


    const campaignData = useLoaderData();
    const { _id, photo, title, campaigntype, description, amount, date } = campaignData
    const { user } = useContext(authContext)
    const { id } = useParams()

    // verifyDeadline({deadline : date})
    // console.log(verifyDeadline({deadline : date}));


    const handleDonate = () => {
        const donatedData = {
            photo,
            title,
            campaigntype,
            description,
            amount,
            date,
            email: user?.email,
            name: user?.displayName,
        }

        fetch("http://localhost:5000/donated", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(donatedData)
        })
            .then(res => res.json())
            .then(result => {
                if (!result.acknowledged) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Donated Data Successfully',
                        icon: 'error',
                        confirmButtonText: 'Close'
                    })
                } else {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Donated Data Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
                console.log(result.acknowledged);

            })

            .catch((err) => {
                console.log("ERROR", err)
            })
    }

    return (
        <div>
            <h2 className="text-center font-bold text-4xl my-6 text-purple-500">Campaign Deatils</h2>
            <div className="flex justify-center lg: mb-6 mx-10">
                <div className="card bg-base-100 shadow-xl border">
                    <figure className="p-6">
                        <img className="object-cover w-full h-[230px]" src={photo} alt="" />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title">Title: {title}</h2>
                        <p><strong>Campaign Type:</strong> {campaigntype}</p>
                        <p><strong>Donation Amount:</strong> {amount}</p>
                        <p><strong>Date:</strong> {date}</p>
                        <p><strong>Description:</strong> {description}</p>

                        <button onClick={handleDonate} className="btn btn-warning text-white font-bold text-lg mt-3">Donate Now</button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;