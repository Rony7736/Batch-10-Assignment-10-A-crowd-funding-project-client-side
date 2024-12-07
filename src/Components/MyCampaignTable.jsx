import { Link } from "react-router-dom";

const MyCampaignTable = ({ campaign, idx, campaignData, setCampaignData }) => {

    const {_id, photo, title, campaigntype, description, amount, date, email, name } = campaign
    // console.log(_id);

    const handleDelete = (id) => {
        // console.log(id);
        fetch(`http://localhost:5000/campaign/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(result => {
            const remainingData = campaignData.filter((campaign) => id!= campaign._id)    
            setCampaignData(remainingData)     
        })

        
    }
    

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
                        <Link>
                            <button onClick={()=>handleDelete(_id)} className="bg-[#FFBE46] font-semibold px-4 py-2 rounded">Delete</button>
                        </Link>

                        <Link>
                            <button className="bg-[#FFBE46] font-semibold px-4 py-2 rounded">Update</button>
                        </Link>

                    </div>
                </td>
            </tr>
        </>
    );
};

export default MyCampaignTable;