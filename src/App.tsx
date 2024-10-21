import { Outlet } from "react-router-dom"

import { UserProvider } from "./providers/UserProvider"
import "./styles/index.css"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function App() {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <UserProvider>
                    <Outlet/>
                </UserProvider>
            </LocalizationProvider>
            <ToastContainer/>
        </>
    )
}
