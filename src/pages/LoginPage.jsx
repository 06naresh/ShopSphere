import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../features/auth";
import { Button, Card } from "@mui/material";
import { useEffect } from "react";

function LoginPage() {

    const {user, login, loading} = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from || "/";

    useEffect(() => {
        if(!loading && user){
            return <p>Checking authentication...</p>
        }
    }, [user, loading, navigate, from]);

    if(loading){
        return <p>Redirecting...</p>
    }

    if(user){
        navigate(from, {
            replace: true,
        });

        return null;
    }

    const handleLogin = (role) => {
        login(role);

        navigate(from, {
            replace:true,
        });
    };

    return (
        <div className="mx-auto max-w-lg">
            <Card title="Login">
                <p className="mb-6 text-sm text-gray-600 dark:text-gray-300">
                    This is a demo authentication flow
                    for learning protected routes.
                </p>

                <div className="space-y-4">
                    <Button
                        className="w-full"
                        onClick={() => 
                            handleLogin("customer")
                        }
                    >
                        Login as Customer
                    </Button>

                    <Button 
                        intent="secondary"
                        className="w-full"
                        onClick={() => 
                            handleLogin("admin")
                        }
                    >
                        Login as Admin
                    </Button>
                </div>
            </Card>
        </div>
    )
}

export default LoginPage;