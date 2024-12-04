import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-lvh bg-[#F7F7F7]" >
            <h2 className="text-7xl mb-12 text-[#9538E2] font-bold">Page Not Found</h2>
            <p className="text-4xl text-[#9538E2] font-semibold">Status: 404</p>

            <NavLink to="/">
                <button className="btn btn-active mt-4 font-bold">Back To home page</button>
            </NavLink>

        </div>
    );
};

export default Error;