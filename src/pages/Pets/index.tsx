import { useContext } from "react";
import Header from "../../components/Header";
import { UserContext } from "../../providers/UserProvider";
import usePets from "./hooks/usePets";
import PetCard from "./components/PetCard";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

export default function Pets() {

    const { user } = useContext(UserContext)
    const { pets, getPets } = usePets()

    return(
        <div className="flex flex-col-reverse bg-lightNeutral w-full">
            <Header/>

            {
                user &&
                
                <div className="flex flex-col gap-16 w-[95%] max-w-[1000px] m-auto pt-[10vh] min-h-[100vh] md:pl-14 pb-32">
                    <div className="flex justify-center md:justify-start items-center gap-8">
                        <h2 className="text-3xl font-semibold text-fontColor">Your Pets 🐶</h2>
                        <Link to="new" className="material-symbols-outlined text-gray-500 text-4xl hover:scale-125 transition-all">add_circle</Link>
                    </div>

                    <div className="w-full flex gap-16 justify-center flex-wrap">
                        {pets.map(pet => (
                            <PetCard key={uuid()} pet={pet} updateData={getPets}/>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}