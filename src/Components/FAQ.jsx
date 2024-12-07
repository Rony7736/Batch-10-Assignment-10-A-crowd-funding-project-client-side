
const FAQ = () => {
    return (
        <div className="pb-10">
            <div className="card bg-base-100 p-6">
                <h1 className="text-3xl text-center text-[#FFBE46] font-bold my-6 bg-slate-800 p-4">A frequently asked questions (FAQ)</h1>
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is Crowdcube?</div>
                    <div className="collapse-content">
                        <p>Crowdcube is an online platform where users can raise funds or donate to various social projects or initiatives.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How can I add a new campaign?</div>
                    <div className="collapse-content">
                        <p>1. Ensure you have an account and are logged in.</p>
                        <p>2. Click on the Add New Campaign button.</p>
                        <p>3. Fill out the required information and submit. Your campaign will be reviewed before it is published.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">What should I do if I have login issues?</div>
                    <div className="collapse-content">
                        <p>1. Double-check that your email and password are correct.</p>
                        <p>2. If the problem persists, contact our support team for assistance.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How do I make a donation?</div>
                    <div className="collapse-content">
                        <p>1. Log in to your account.</p>
                        <p>2. Go to "All Campaigns" and select the campaign you wish to support.</p>
                        <p>3. Click "Donate Now" and complete the payment process.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How can I view my donations?</div>
                    <div className="collapse-content">
                        <p>Once logged in:</p>
                        <p>2. Navigate to the "My Donations" page.</p>
                        <p>3. Here, you will see a list of all your contributions.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How can I log out?</div>
                    <div className="collapse-content">
                        <p>To log out, click the "Logout" button located next to your profile picture.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Is Crowdcube secure?</div>
                    <div className="collapse-content">
                        <p>Yes, Crowdcube is a secure platform. Your personal and payment information is always protected.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;