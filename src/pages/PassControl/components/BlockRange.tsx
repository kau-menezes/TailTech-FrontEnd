import { AxiosError } from "axios";
import { IBlockRange } from "../../../types/permission.types"
import { toast } from "react-toastify";
import { api } from "../../../service/api";

interface IBlockRangeProps {
    blockRange: IBlockRange;
    refresh: () => Promise<void>
}

export default function BlockRange({ blockRange, refresh }:IBlockRangeProps) {

    const selfDelete = async () => {
        try {
            const token = localStorage.getItem("@TOKEN")
            await api.delete(
                `/permissions/${blockRange.blockRangeId}`,
                { headers: { Authorization: `Bearer ${token}` } }
            )
            await refresh()
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response?.data.message)
        }
    }

    return(
        <div className="px-8 py-4 bg-white rounded-md shadow-lg text-center flex justify-center gap-4 relative" >
            <p>{ blockRange.startHour.toString().padStart(2, "0") }:{ blockRange.startMinute.toString().padStart(2, "0") }</p>
             - 
            <p>{ blockRange.endHour.toString().padStart(2, "0") }:{ blockRange.endMinute.toString().padStart(2, "0") }</p>
            <button 
                className="material-symbols-outlined absolute right-2"
                onClick={selfDelete}
            >close</button>
        </div>
    )
}