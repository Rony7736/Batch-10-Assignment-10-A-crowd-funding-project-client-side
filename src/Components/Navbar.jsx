
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <div className="flex justify-center items-center gap-6 font-bold text-lg">
        <NavLink to="/" className={({ isActive }) => `text-base ${isActive ? 'text-warning font-bold' : 'hover:text-warning'}`}><li>Home</li></NavLink>
        <NavLink to="/donation" className={({ isActive }) => `text-base ${isActive ? 'text-white font-bold' : 'hover:text-white'}`}><li>All Campaign</li></NavLink>
        <NavLink to="/tohelp" className={({ isActive }) => `text-base ${isActive ? 'text-white font-bold' : 'hover:text-white'}`}><li>Add New Campaign</li></NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => `text-base ${isActive ? 'text-white font-bold' : 'hover:text-white'}`}><li>My Campaign</li></NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => `text-base ${isActive ? 'text-white font-bold' : 'hover:text-white'}`}><li>My Donations</li></NavLink>

    </div>

    return (
        <div className="navbar items-start lg:items-center bg-[#FFBE46] py-4 lg:px-8 flex-col md:flex-row">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to="/" className={({ isActive }) => `text-base ${isActive ? 'text-warning font-bold' : 'hover:text-warning'}`}><li>Home</li></NavLink>
                        <NavLink to="/donation" className={({ isActive }) => `text-base ${isActive ? 'text-warning font-bold' : 'hover:text-warning'}`}><li>All Campaign</li></NavLink>
                        <NavLink to="/tohelp" className={({ isActive }) => `text-base ${isActive ? 'text-warning font-bold' : 'hover:text-warning'}`}><li>Add New Campaign</li></NavLink>
                        <NavLink to="/dashboard" className={({ isActive }) => `text-base ${isActive ? 'text-warning font-bold' : 'hover:text-warning'}`}><li>My Campaign</li></NavLink>
                        <NavLink to="/dashboard" className={({ isActive }) => `text-base ${isActive ? 'text-warning font-bold' : 'hover:text-warning'}`}><li>My Donations</li></NavLink>
                    </ul>
                </div>
                <div className="flex items-center">
                    <NavLink to="/" className="btn btn-ghost text-2xl">Crowd Funding Website</NavLink>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-4 rounded-lg ">
                <NavLink to='/login' className="btn btn-neutral rounded-none">Login</NavLink>

            </div>
        </div>
    );
};

export default Navbar;