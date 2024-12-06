
const AddCampaign = () => {

    const handleAddCampaign = (e) => {
        e.preventDefault()
        const form = e.target
        const photo = form.photo.value
        const campaigntitle = form.campaigntitle.value
        const description = form.description.value
        const donationamount = form.donationamount.value
        const details = form.details.value
        const useremail = form.useremail.value
        const username = form.username.value

        console.log({photo, campaigntitle, description, donationamount, details, useremail, username});

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
                            <input type="text" placeholder="Enter photo URL" name="photo" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Campaign Title</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="campaigntitle" name="campaigntitle" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                </div>

                {/* Campaign Type row */}
                <div className="mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Campaign Type</span>
                        </label>

                        <label className="">
                            <select className="py-2 px-3 rounded-lg" required>
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
                            <input type="text" placeholder="description" name="description" className="input input-bordered md:w-full" />
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
                            <input type="text" placeholder="Minimum Donation Amount" name="donationamount" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Deadline</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee details" name="details" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>

                {/* User Email and User Name row */}
                <div className="md:flex gap-6 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">User Email </span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="User Email" name="useremail" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">User Name</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="User Name" name="username" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Campaign" className="btn btn-block bg-[#FFBE46]" />

            </form>
        </div>
    );
};

export default AddCampaign;