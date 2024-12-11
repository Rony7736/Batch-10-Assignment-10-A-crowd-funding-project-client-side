
import { Link } from "react-router-dom";

const CampaignTable = ({ campaign, idx }) => {
    // console.log(campaign);
    const { _id, photo, title, campaigntype, description, amount, date, email, name } = campaign

    return (
        <>
            <tr>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{campaigntype}</td>
                <td>{amount}</td>
                <td>{date}</td>
                <td>
                    <div className="flex gap-4">
                        <Link to={`/deatils/${_id}`}>
                            <button className="bg-[#FFBE46] px-4 py-2 rounded font-semibold">See More</button>
                        </Link>

                    </div>
                </td>
            </tr>
        </>
    );
};

export default CampaignTable;