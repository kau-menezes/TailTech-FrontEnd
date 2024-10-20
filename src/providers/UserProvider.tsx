import { createContext, useCallback, useEffect, useState } from "react";
import { IParentComponentProps } from "../types/utility.types";
import { IUser } from "../types/user.types";
import { api } from "../service/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface IUserContext {
    user: IUser | null;
    handleLogout: () => void;
    handleLogin: (email:string, password:string) => Promise<void>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }:IParentComponentProps) => {

    const [user, setUser] = useState<IUser | null>(null)
    const navigate = useNavigate()

    const getUser = useCallback(async () => {
        try {
            const token = localStorage.getItem("@TOKEN")
            const res = await api.get("/users", { headers: { Authorization: `Bearer ${token}` } })
            return res.data
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response?.data.message)
        }
    }, [])

    const handleLogin = async (username:string, email:string) => {
        try {
            const res = await api.post("/login", { username, email })
            localStorage.setItem("@TOKEN", res.data.token)
            setUser(await getUser())
            navigate("/home")
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response?.data.message)
        }
    }

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("@TOKEN")
        navigate("/")
    }

    useEffect(() => {
        (async () => {
            if(localStorage.getItem("@TOKEN"))
                setUser(await getUser())
        })()
    }, [])    

    return(
        <UserContext.Provider
            value={{
                user,
                handleLogin,
                handleLogout,
            }}
            children={children}
        />
    )
}