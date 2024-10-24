import { AxiosError } from "axios";
import { APIPath } from "../../../constants/APIPath";
import { IPet } from "../../../types/pets.types"
import { toast } from "react-toastify";
import { ChangeEventHandler, useState } from "react";
import { api } from "../../../service/api";

interface IPetCardProps {
    pet: IPet;
    updateData: () => Promise<void>;
}

export default function PetCard({ pet, updateData }:IPetCardProps) {

    const [name, setName] = useState(pet.name)

    const handleChange:ChangeEventHandler<HTMLInputElement> = async (e) => {
        const file = e.target.files && e.target.files[0];
        if(file) {
            try {
                const token = localStorage.getItem("@TOKEN")
                const data = new FormData()
                data.append("picture", file)

                await api.patch(
                    `/pets/${pet.petId}/picture`, data, 
                    { headers: { Authorization: `Bearer ${token}` } }
                )
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response?.data.message)
            } finally {
                await updateData()
            }
        }
    }

    const updateName = async () => {
        try {
            const token = localStorage.getItem("@TOKEN")
            await api.patch(`/pets/${pet.petId}`, { name }, 
                { headers: { Authorization: `Bearer ${token}` } }
            )
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response?.data.message)
        } finally {
            await updateData()
        }
    }

    const handleKeyChange = async (key:string) => {
        switch(key) {
            case "Escape": 
                setName(pet.name);
                (document.activeElement as HTMLInputElement).blur();
                break;
            case "Enter": 
                updateName();
                (document.activeElement as HTMLInputElement).blur();
                break;
            default:
                break;
        }
    }

    return(
        <div className="w-full max-w-96 rounded-md p-8 shadow-lg hover:scale-105 transition-all flex flex-col gap-8">
            <label className="w-full transition-all cursor-pointer relative">
                <img src={`${APIPath.PHOTOS}/${pet.pictureUrl}`} className="w-full h-64 object-cover"/>
                <input onChange={handleChange} type="file" className="hidden" />
                
                <div className="absolute left-0 top-0 w-full h-64 opacity-0 hover:opacity-100 transition-all hover:backdrop-brightness-50 flex justify-center items-center">
                    <span className="material-symbols-outlined text-white text-5xl">edit</span>
                </div>
            </label>

            <input 
                className="text-2xl font-semibold text-fontColor text-center bg-transparent max-w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => handleKeyChange(e.key)}
            />
        </div>
    )
}