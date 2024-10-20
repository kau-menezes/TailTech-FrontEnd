import { Outlet } from "react-router-dom"

import { UserProvider } from "./providers/UserProvider"
import "./styles/index.css"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


export default function App() {
    return (
        <>
            <UserProvider>
                <Outlet/>
            </UserProvider>
            <ToastContainer/>
        </>
    )
}
