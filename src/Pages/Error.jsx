import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-lvh bg-[#F7F7F7]" >
            <h2 className="text-7xl mb-12 text-red-500 font-bold">Page Not Found</h2>
            <p className="text-4xl text-red-500 font-semibold">Status: 404</p>

            <NavLink to="/">
                <button className="btn btn-ghost mt-4 font-bold text-purple-600">Back To home page</button>
            </NavLink>

        </div>
    );
};

export default Error;