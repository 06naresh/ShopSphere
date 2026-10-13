import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RequireRole({ role }) {

    const { user } = useAuth();

    const outletContext = useOutletContext();

    if(!user){
        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    if(user.role !== role){
        return(
            <Navigate
                to="/access-denied"
                replace
            />
        );
    }

    return <Outlet context={outletContext}/>;
}

export default RequireRole;