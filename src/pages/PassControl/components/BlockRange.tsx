import { IBlockRange } from "../../../types/permission.types"

interface IBlockRangeProps {
    blockRange: IBlockRange;
    selfRemove: () => void;
}

export default function BlockRange({ blockRange, selfRemove }:IBlockRangeProps) {
    return(
        <div className="px-8 py-4 bg-white rounded-md shadow-lg text-center flex justify-center gap-4 relative" >
            <p>{ blockRange.startHour.toString().padStart(2, "0") }:{ blockRange.startMinute.toString().padStart(2, "0") }</p>
             - 
            <p>{ blockRange.endHour.toString().padStart(2, "0") }:{ blockRange.endMinute.toString().padStart(2, "0") }</p>
            <button 
                className="material-symbols-outlined absolute right-2"
                onClick={selfRemove}
            >close</button>
        </div>
    )
}