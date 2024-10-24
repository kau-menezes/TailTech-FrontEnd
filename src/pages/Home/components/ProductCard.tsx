import { Link } from "react-router-dom";

interface IProductCardProps {
    image: string;
    title: string;
    link?: string;
}

export default function ProductCard({ image, title, link }:IProductCardProps) {

    return(
        <Link to={link || ""} className="w-full max-w-[300px] rounded-xl overflow-hidden bg-white flex flex-col hover:scale-110 transition-all cursor-pointer">
            <img src={image} className="w-full "/>
            <h4 className="text-xl font-semibold text-fontColor text-center py-8">{title}</h4>
        </Link>
    )
}