import Swal from "sweetalert2";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const AddCampaign = () => {

    // const [startDate, setStartDate] = useState(new Date());
    // console.log(startDate);

    const { user } = useContext(authContext)

    const handleAddCampaign = (e) => {
        e.preventDefault()
        const form = e.target
        const photo = form.photo.value
        const campaigntitle = form.campaigntitle.value
        const campaigntype = form.campaigntype.value;
        const description = form.description.value
        const date = form.date.value
        const donationamount = form.donationamount.value
        // const formattedDate = startDate.toLocaleDateString("en-CA");
        // console.log(startDate);


        const newCampaign = {
            photo: photo,
            title: campaigntitle,
            campaigntype: campaigntype,
            description: description,
            amount: parseFloat(donationamount),
            // date : formattedDate, 
            // date : startDate, 
            date: date,
            email: user.email,
            name: user.displayName,
        };
        // console.log(typeof donationamount);

        // send data to the server
        fetch('http://localhost:5000/addcampaign', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Campaign Added Successfully In the All Campaign Page',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }


    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-center py-4">Add New Campaign</h2>

            <form onSubmit={handleAddCampaign}>

                {/* form Photo URL and Campaign Title row */}
                <div className="mb-8 md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo URL</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="Enter photo URL" name="photo" className="input input-bordered md:w-full" required />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Campaign Title</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="campaigntitle" name="campaigntitle" className="input input-bordered md:w-full" required />
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
                            <select className="py-2 px-3 rounded-lg md:w-full" name="campaigntype" required>
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
                            <input type="text" placeholder="Write a Brief Description" name="description" className="input input-bordered md:w-full" required />
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
                            <input type="number" placeholder="Minimum Donation Amount" name="donationamount" className="input input-bordered md:w-full" required />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Deadline</span>
                        </label>

                        <label className="input-group">
                            <input type="date" placeholder="Dateline" name="date" className="input input-bordered md:w-full" required />
                        </label>

                        {/* <DatePicker
                            className="input input-bordered w-full"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        /> */}
                    </div>
                </div>

                {/* User Email and User Name row */}
                <div className="md:flex gap-6 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">User Email </span>
                        </label>

                        <label className="input-group">
                            <input type="email" placeholder="User Email" name="useremail" defaultValue={user?.email} className="input input-bordered md:w-full" disabled />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">User Name</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="User Name" name="username" defaultValue={user?.displayName} className="input input-bordered md:w-full" disabled />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Campaign" className="btn btn-block bg-[#FFBE46]" />

            </form>
        </div>
    );
};

export default AddCampaign;