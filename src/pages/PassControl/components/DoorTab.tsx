import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../../components/Input";
import { IPetDoor, IPetDoorUpdate } from "../../../types/doors.types";
import { useEffect } from "react";

interface IDoorTabProps {
    door: IPetDoor;
    selected?: boolean;
    handleSetDoor: (door:IPetDoor) => void;
}

export default function DoorTab({ door, handleSetDoor, selected }:IDoorTabProps) {

    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        setValue("nickname", door.nickname)
    }, [])

    const submit:SubmitHandler<IPetDoorUpdate> = async (data) => {
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input
                id={`door-${door.petDoorId}`} 
                className={`${selected ? "bg-darkNeutral" : ""} text-fontColor rounded-md cursor-pointer w-max text-center`}
                onClick={() => handleSetDoor(door)}
                {...register("nickname")}
                autoComplete="off"
            />
        </form>
    )
}