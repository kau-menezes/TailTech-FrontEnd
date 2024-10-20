import { useEffect, useState } from "react";
import { IPetDoor } from "../../../types/doors.types";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "../../../service/api";

export default function useDoors() {
    
    const [doors, setDoors] = useState<IPetDoor[]>([])

    const getDoors = async () => {
        try {
            const token = localStorage.getItem("@TOKEN")
            const res = await api.get("/doors", { headers: { Authorization: `Bearer ${token}` } })
            return res.data
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response?.data.message)
        }
    }
    
    const updateDoors = async () => {
        setDoors(await getDoors())
    }

    useEffect(() => {
        (async () => {
            setDoors(await getDoors())
        })()
    }, [])

    return { doors, updateDoors }
}