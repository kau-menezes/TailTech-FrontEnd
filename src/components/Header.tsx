import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IHeaderProps {
    selected?: "products" | "pets" | "passcontrol" | "feeder" | "dashboard" | "settings";
}

export const Header = ({ selected }:IHeaderProps) => {

    const [openNav, setOpenNav] = useState<boolean>(false);

    const navHandler = () => {
        setOpenNav(current => !current);
    };

    useEffect(() => {
        console.log(openNav);
    }, [openNav]);

    return (
        <header className="bg-white flex items-center p-4 shadow-lg w-full h-[10vh] md:flex-col md:w-fit md:h-screen fixed bottom-0 z-50">
            <div className="flex justify-between items-center h-[10%] w-full">
                <Link to="/Home"><img src="/public/assets/logo-square.png" alt="Home" className="w-[45px]" /></Link>
                <img
                    onClick={navHandler}
                    src="/public/assets/icon/menu.png"
                    alt="Toggle Menu"
                    className="w-[25px] h-auto cursor-pointer md:hidden"
                />
            </div>
            <nav className={`h-fit  md:flex md:flex-col md:w-fit md:h-[90%] md:static items-center justify-around w-full transition-all duration-300 fixed left-0 top-[100%] xs:bg-white ${openNav ? "translate-y-[-135%] " : ""}`}>
                <div className="h-fit flex flex-col gap-8 md:items-center md:pr-0 items-end pr-4">
                    <HeaderIcon selected={selected == "products"} path="/Products" iconName="products" alt="Products" />
                    <HeaderIcon selected={selected == "pets"} path="/Pets" iconName="pets" alt="Your Pets" />
                    <HeaderIcon selected={selected == "passcontrol"} path="/PassControl" iconName="passcontrol" alt="PassControl" />
                    <HeaderIcon selected={selected == "feeder"} path="/Feeder" iconName="feeder" alt="Feeder" />
                    <HeaderIcon selected={selected == "dashboard"} path="/Dashboard" iconName="dashboard" alt="Dashboard" />
                    <HeaderIcon selected={selected == "settings"} path="/Settings" iconName="settings" alt="Settings" />
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
    <Link to={path}>
        <img 
            className={`w-[25px] ${selected ? "bg-lightNeutral" : ""}`} 
            src={`/public/assets/icon/${iconName}.png`} 
            alt={alt} 
        />
    </Link>
);