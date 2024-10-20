import { IPetDoor } from "../../../types/doors.types";

interface IDoorTabProps {
    door: IPetDoor;
    selected?: boolean;
    handleSetDoor: (door:IPetDoor) => void;
}

export default function DoorTab({ door, handleSetDoor, selected }:IDoorTabProps) {

    return(
        <span 
            className={` ${selected ? "bg-darkNeutral" : ""} text-fontColor px-3 py-2 rounded-md cursor-pointer`}
            onClick={() => handleSetDoor(door)}
        >
            { door.nickname }
        </span>
    )
}