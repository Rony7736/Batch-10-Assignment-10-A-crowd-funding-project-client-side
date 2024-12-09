// import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Deatails = ({ campaign }) => {

    const { photo, title, campaigntype, description, amount, date, email, name } = campaign
    const { user } = useContext(authContext)

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
        // console.log(campaign);

        fetch("http://localhost:5000/donated", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(donatedData)
        })
            .then(res => res.json())
            .then(result => {
                console.log("donation successfull", result)
                alert("thank you for your donation")
            })
            .catch((err) => {
                console.log("ERROR" ,err)
            })

    }


    return (
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
    );
};

export default Deatails;