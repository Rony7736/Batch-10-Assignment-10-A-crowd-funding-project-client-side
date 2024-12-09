
const DonatedCard = ({ donatedCard }) => {
    // console.log(donatedCard);
    const { photo, title, campaigntype, description, amount, date} = donatedCard

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

            </div>

        </div>
    );
};

export default DonatedCard;