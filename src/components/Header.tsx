import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

interface IHeaderProps {
    selected?: "products" | "pets" | "passcontrol" | "feeder" | "dashboard" | "settings";
}

export default function Header({ selected }:IHeaderProps) {

    const { handleLogout } = useContext(UserContext)
    const [openNav, setOpenNav] = useState<boolean>(false);

    const navHandler = () => {
        setOpenNav(current => !current);
    };

    return (
        <header className="bg-white flex items-center min-w-16 shadow-lg w-full h-[10vh] md:flex-col md:w-fit md:h-screen fixed bottom-0 z-[999]">
            <div className="flex justify-between px-4 md:px-0 md:justify-center items-center h-[10%] w-full">
                <Link to="/Home"><img src="/public/assets/logo-square.png" alt="Home" className="w-[45px]" /></Link>
                <img
                    onClick={navHandler}
                    src="/public/assets/icon/menu.png"
                    alt="Toggle Menu"
                    className="w-[25px] h-auto cursor-pointer md:hidden"
                />
            </div>
            <nav className={`md:flex md:flex-col md:w-full md:h-[90%] md:static items-center justify-around w-20 h-[90vh] bg-white pt-8 md:pt-0 transition-all md:translate-y-[0] duration-300 fixed right-0 top-0 xs:bg-white ${!openNav ? "translate-y-[110%] " : ""}`}>
                <div className="h-fit flex flex-col gap-8 md:items-center md:pr-0 items-end w-full">
                    <HeaderIcon selected={selected == "passcontrol"} path="/pass-control" iconName="passcontrol" alt="PassControl" />
                    <HeaderIcon selected={selected == "pets"} path="/pets" iconName="pets" alt="Your Pets" />
                    <HeaderIcon selected={selected == "feeder"} path="/feeder" iconName="feeder" alt="Feeder" />
                    <HeaderIcon selected={selected == "dashboard"} path="/dashboard" iconName="dashboard" alt="Dashboard" />
                </div>
                <div className="mt-[100%]" onClick={handleLogout}>
                    <HeaderIcon selected={selected == "settings"} path="" iconName="logout" alt="Settings" />
                </div>
            </nav>
        </header>
    );
};

interface IHeaderIconProps {
    iconName: string;
    path: string;
    alt: string;
    selected?: boolean;
}

const HeaderIcon = ({ iconName, path, alt, selected }:IHeaderIconProps) => (
    <Link to={path} className={`w-full flex items-center justify-center py-2 rounded-l-lg overflow-hidden ${selected ? "bg-lightNeutral" : ""}`}>
        <img 
            className={`w-full max-w-8 ${selected ? "bg-lightNeutral" : ""}`} 
            src={`/assets/icon/${iconName}.png`} 
            alt={alt} 
        />
    </Link>
);