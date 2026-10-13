import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({children}) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storeUser = sessionStorage.getItem("shopsphere_user");

        setTimeout(() => {
            if(storeUser){
                setUser(JSON.parse(storeUser))
            }

            setLoading(false);
        }, 500);
    }, []);

    const login = (role = "customer") => {
        const loggedInUser = {
            name: 
                role === "admin"
                ? "ShopSphere Admin"
                : "ShopSphere Customer",
            role,
        };

        sessionStorage.setItem("shopsphere_user", JSON.stringify(loggedInUser));

        setUser(loggedInUser);
    };

    const logout = () => {
        sessionStorage.removeItem("shopsphere_user");

        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    return useContext(AuthContext);
}

export default AuthProvider;