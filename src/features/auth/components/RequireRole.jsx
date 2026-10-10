import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RequireRole({ role }) {

    const { user } = useAuth();

    if(!user){
        return (
            <Navigation
                to="/login"
                replace
            />
        );
    }

    if(user.role !== role){
        return(
            <Navigation
                to="/access-denied"
                replace
            />
        );
    }

    return <Outlet />;
}

export default RequireRole;