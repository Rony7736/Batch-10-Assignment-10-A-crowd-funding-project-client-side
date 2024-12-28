import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCampaignTable = ({ campaign, idx, campaignData, setCampaignData }) => {

    const { _id, photo, title, campaigntype, description, amount, date, email, name } = campaign
    // console.log(_id);

    const handleDelete = (id) => {
        // console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://a-crowd-funding-project-server-side.vercel.app/campaign/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        if (result.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Deleted Data Successfully",
                                icon: "success"
                            });
                        }
                        const remainingData = campaignData.filter((campaign) => id != campaign._id)
                        setCampaignData(remainingData)
                    })

            }
        });

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
                            <button onClick={() => handleDelete(_id)} className="bg-[#FFBE46] font-semibold px-4 py-2 rounded">Delete</button>
                        </Link>

                        <Link to={`/update/${_id}`}>
                            <button className="bg-[#FFBE46] font-semibold px-4 py-2 rounded">Update</button>
                        </Link>

                    </div>
                </td>
            </tr>
        </>
    );
};

export default MyCampaignTable;