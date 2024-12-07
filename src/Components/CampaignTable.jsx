
import { Link } from "react-router-dom";

const CampaignTable = ({ campaign, idx }) => {
    // console.log(campaign);
    const { photo, title, campaigntype, description, amount, date, email, name } = campaign

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
                        <button className="bg-[#FFBE46] px-4 py-2 rounded font-semibold">
                            <Link to={`/details`}> See More</Link>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default CampaignTable;