import { useState } from "react"
import { IPetPermission } from "../../../types/permission.types"
import { AxiosError } from "axios"
import { toast } from "react-toastify"
import { api } from "../../../service/api"

interface IPetPermissionToggle {
    pet: IPetPermission;
    petDoorId: string;
}

export default function PetPermissionToggle({ pet, petDoorId }:IPetPermissionToggle) {

    const [checked, setChecked] = useState(pet.hasPermission)
    
    const handleUpdatePermission = async () => {
        setChecked(prev => !prev)
        try {
            const token = localStorage.getItem("@TOKEN")
            await api.patch(
                `/permissions/pet-doors/${petDoorId}/pets/${pet.petId}`,
                { permission: !checked },
                { headers: { Authorization: `Bearer ${token}` } }
            )
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response?.data.message)
        }
    }

    return(
        <label className="inline-flex flex-wrap items-center justify-between cursor-pointer px-4 py-6 rounded-md shadow-lg w-full">
            <img className="w-[30px]" src="/assets/icon/paw-icon.png" alt="" />
            <span className="font-medium text-lg text-fontColor">{ pet.name }</span>
            <input 
                value="" 
                type="checkbox" 
                className="sr-only peer" 
                checked={checked} 
                onChange={handleUpdatePermission}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-denialRed peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark peer-checked:bg-approvalGreen shadow-inner"></div>
        </label>
    )
}