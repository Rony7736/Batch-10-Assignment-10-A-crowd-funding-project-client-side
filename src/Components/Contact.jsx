
const Contact = () => {
    return (
        <div>

            <div className="card bg-base-100 my-8">
                <h1 className="text-3xl text-center text-[#FFBE46] font-bold bg-slate-800 p-4">Contact Section</h1>

                <div className="bg-[#F4F3F0] px-8 py-12 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <input className="py-4 rounded-xl input input-bordered" type="text" placeholder="First Name*" name="" id="" />
                        <input className="py-4 rounded-xl input input-bordered" type="text" placeholder="Last Name*" name="" id="" />
                        <input className="py-4 rounded-xl input input-bordered" type="text" placeholder="Phone Number*" name="" id="" />
                        <input className="py-4 rounded-xl input input-bordered" type="text" placeholder="Email Number*" name="" id="" />
                        <textarea className="w-full lg:col-span-2 rounded-xl border-2 bordered placeholder:pl-6 pt-6" placeholder="Write your message here" name="" id="" cols="30" rows="8"></textarea>
                    </div>

                    <div className="pt-6 text-center">
                        <button className="btn btn-warning rounded-xl h-16 w-40 text-lg font-semibold">Submit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;