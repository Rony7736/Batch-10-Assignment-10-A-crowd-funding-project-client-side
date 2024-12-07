
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const UpdateCampaign = () => {

    const { id } = useParams()
    const singleCampaignData = useLoaderData()
    const { email, name } = singleCampaignData
    console.log(id, singleCampaignData);
    

    const [photo, setPhoto] = useState(singleCampaignData?.photo)
    const [title, setTitle] = useState(singleCampaignData?.title)
    const [campaigntype, setCampaignType] = useState(singleCampaignData?.campaigntype)
    const [description, setDescription] = useState(singleCampaignData?.description)
    const [amount, setAmount] = useState(singleCampaignData?.amount)
    const [date, setDate] = useState(singleCampaignData?.date)

    console.log(singleCampaignData);


    const handleUpdateCampaign = (e) => {
        e.preventDefault()

        const data = {
            photo: photo,
            title: title,
            campaigntype: campaigntype,
            description: description,
            amount: amount,
            date: date,
            email: email,
            name: name,
        }

        fetch(`http://localhost:5000/campaign/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Updated Data Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
            })
    }


    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-center pb-8">Update Campaign</h2>

            <form onSubmit={handleUpdateCampaign}>

                {/* form Photo URL and Campaign Title row */}
                <div className="mb-8 md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo URL</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="Enter photo URL" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} className="input input-bordered md:w-full" required />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Campaign Title</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="campaigntitle" name="campaigntitle" value={title} onChange={(e) => setTitle(e.target.value)} className="input input-bordered md:w-full" required />
                        </label>
                    </div>

                </div>

                {/* Campaign Type row */}
                <div className="mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Campaign Type</span>
                        </label>

                        <label className="md:w-full">
                            <select className="py-2 px-3 rounded-lg md:w-full" name="campaigntype" value={campaigntype} onChange={(e) => setCampaignType(e.target.value)} required>
                                <option value="">Select An Campaign Type</option>
                                <option value="Personal Issue">Personal Issue</option>
                                <option value="Startup">Startup</option>
                                <option value="Business">Business</option>
                                <option value="Creative Ideas">Creative Ideas</option>
                            </select>
                        </label>
                    </div>
                </div>

                {/* Description row */}
                <div className="mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Description</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="Write a Brief Description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="input input-bordered md:w-full" required />
                        </label>
                    </div>

                </div>

                {/* Minimum Donation Amount and Deadline row */}
                <div className="md:flex gap-6 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Minimum Donation Amount</span>
                        </label>

                        <label className="input-group">
                            <input type="number" placeholder="Minimum Donation Amount" name="donationamount" value={amount} onChange={(e) => setAmount(e.target.value)} className="input input-bordered md:w-full" required />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Deadline</span>
                        </label>

                        <DatePicker
                            value={date}
                            selected={date}
                            onChange={(date) => setDate(date)}
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                {/* User Email and User Name row */}
                <div className="md:flex gap-6 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">User Email </span>
                        </label>

                        <label className="input-group">
                            <input type="email" placeholder="User Email" name="useremail" defaultValue={email} className="input input-bordered md:w-full" readOnly />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">User Name</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="User Name" name="username" defaultValue={name} className="input input-bordered md:w-full" readOnly />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Update Campaign" className="btn btn-block bg-[#FFBE46]" />

            </form>
        </div>
    );
};

export default UpdateCampaign;