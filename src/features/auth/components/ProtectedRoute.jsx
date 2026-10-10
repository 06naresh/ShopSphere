import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {

    const {user, loading,} = useAuth();

    const location = useLocation();

    if(loading){
        return (
            <div className="flex min-h-[50vh] items-center justify-center">
                <div className="text-center">
                    <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600">

                        <p className="text-gray-600 dark:text-gray-300">
                            Checking authentication...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    if(!user) {
        return (
            <Navigate
                to="/login"
                replace
                state={{
                    from:
                        location.pathname + location.search,
                }}
            />
        );
    }

    return <Outlet />;
}

export default ProtectedRoute;