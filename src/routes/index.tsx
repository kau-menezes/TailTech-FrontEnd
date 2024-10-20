import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import App from "../App";
import PassControl from "../pages/PassControl";

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
                element: <div>register</div>
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
                element: <div></div>
            },
            {
                path: "/pets/new",
                element: <div></div>
            },
            {
                path: "/doors",
                element: <div></div>
            },
        ]
    },

])

export default router
