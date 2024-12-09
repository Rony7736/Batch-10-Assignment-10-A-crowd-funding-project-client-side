import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const DonatedCollection = () => {
    const {user} = useContext(authContext)
    // console.log(user);
    
    return (
        <div>
            Donated Collection
        </div>
    );
};

export default DonatedCollection;