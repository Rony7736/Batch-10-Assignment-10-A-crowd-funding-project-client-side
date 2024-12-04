import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(authContext)

    // login korle onno route a shift korar jonno
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;