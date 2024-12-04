import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>

            <div className='bg-[#06091A]'>
                <div className='flex flex-col items-center justify-center py-10 w-10/12 mx-auto'>

                    <div className='flex flex-col lg:flex-row justify-between w-full'>

                        <div className='text-white'>
                            <h1 className='mb-6 text-4xl font-bold text-red-700'><i>Crowd Funding</i></h1>
                            <p className='w-[300px] text-[#9B9DA3] text-sm'>The emergence and growth of crowdfunding offers the potential to transform the structure and mechanisms by which small and medium-sized enterprises (SMEs) can raise capital. This is particularly valuable since the credit crunch that followed the global financial crisis of 2007-09 has made it more difficult for SMEs to secure capital injections, especially compared with their larger counterparts.</p>

                        </div>

                        <div>
                            <h1 className='text-white mb-6 text-lg'>Quick Links</h1>

                            <ul className='text-[#9B9DA3] text-lg list-disc pl-4'>
                                <li>Home</li>
                                <li>All Campaign</li>
                                <li>Add New Campaign</li>
                                <li>My Campaign</li>
                                <li>My Donations</li>
                            </ul>
                        </div>

                        <div className='mb-6'>
                            <p className='w-64 text-white text-xl mb-6'>Social Media Links</p>
                            <div className="flex gap-4">
                                <a href="" className="text-white"><FaFacebookF></FaFacebookF></a>
                                <a href="" className="text-white"><FaInstagram></FaInstagram></a>
                                <a href="" className="text-white"><FaTwitter></FaTwitter></a>
                            </div>                           
                        </div>

                    </div>

                    <p className='text-[#9B9DA3] mt-6'> &#64; 2024 All Rights Reserved by Rony Chakrabarty.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;