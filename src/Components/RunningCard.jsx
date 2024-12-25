import { Link } from "react-router-dom";

const RunningCard = ({ campaignCard }) => {
    // console.log(campaignCard);
    const {_id, photo, title, campaigntype, amount, date, email, name } = campaignCard

    const currentDate = new Date()
    const dateLineDate = new Date(date)

    const isDateLIneOver = dateLineDate > currentDate
    if (!isDateLIneOver) {
        return null
    }

    return (
        <div className="card bg-base-100 shadow-xl border my-6">
            <figure className="p-6">
                <img className="object-cover w-full h-[230px]" src={photo} alt="" />
            </figure>

            <div className="card-body">
                <h2 className="card-title">Title: {title}</h2>
                <p><strong>Campaign Type:</strong> {campaigntype}</p>
                <p><strong>Donation Amount:</strong> {amount}</p>
                <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
            </div>

            <Link to={`/deatils/${_id}`}>
                <button className="bg-[#FFBE46] px-4 py-2 rounded font-semibold ml-8 mb-3">See More</button>
            </Link>
        </div>
    );
};

export default RunningCard;