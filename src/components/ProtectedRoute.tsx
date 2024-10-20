import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Outlet } from "react-router-dom";
import NotFound from "./NotFound";

export default function ProtectedRoute() {
    const { user } = useContext(UserContext)
    return user ? <Outlet/> : <NotFound/>
}