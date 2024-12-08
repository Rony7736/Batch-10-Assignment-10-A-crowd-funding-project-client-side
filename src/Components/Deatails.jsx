// import { NavLink } from "react-router-dom";

import { NavLink } from "react-router-dom";

const Deatails = ({ campaign }) => {

    const { photo, title, campaigntype, description, amount, date, email, name } = campaign
    // console.log(campaign);


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

                <NavLink to="/donatecollection">
                    <button className="btn btn-warning text-white font-bold text-lg mt-3">Donate Now</button>
                </NavLink>
            </div>

        </div>
    );
};

export default Deatails;