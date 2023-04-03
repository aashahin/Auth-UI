import {useState, createContext, useEffect} from 'react';
import axios from "axios";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    if(process.server){
        axios.defaults.baseURL = process.env.API_BACKEND;
    }else{
        axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
    }

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
        setUser(JSON.parse(user));
        }
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser}}>
        {children}
        </AuthContext.Provider>
    );
}