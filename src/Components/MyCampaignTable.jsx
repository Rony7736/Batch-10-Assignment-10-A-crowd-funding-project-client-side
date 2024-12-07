import { Link } from "react-router-dom";

const MyCampaignTable = ({ campaign, idx }) => {

    const {_id, photo, title, campaigntype, description, amount, date, email, name } = campaign
    console.log(_id);
    

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
                        <Link to={`/`}>
                            <button className="bg-[#FFBE46] font-semibold px-4 py-2 rounded">Delete</button>
                        </Link>

                        <Link to={`/`}>
                            <button className="bg-[#FFBE46] font-semibold px-4 py-2 rounded">Update</button>
                        </Link>

                    </div>
                </td>
            </tr>
        </>
    );
};

export default MyCampaignTable;