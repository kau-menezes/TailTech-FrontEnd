import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import App from "../App";
import PassControl from "../pages/PassControl";
import Register from "../pages/Register";
import Pets from "../pages/Pets";
import SmartFeeder from "../pages/SmartFeeder";
import CreatePet from "../pages/CreatePet";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/pass-control",
                element: <PassControl/>
            },
            {
                path: "/pets",
                element: <Pets/>
            },
            {
                path: "/pets/new",
                element: <CreatePet/>
            },
            {
                path: "/feeder",
                element: <SmartFeeder/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
        ]
    },

])

export default router
