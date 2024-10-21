import { useEffect, useState } from "react";
import { IDoorPermissionDetails } from "../../../types/permission.types";
import { api } from "../../../service/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export default function useDoorDetails() {

    const [doorId, setDoorId] = useState<string>()
    const [details, setDetails] = useState<IDoorPermissionDetails>()

    const refreshDetails = async () => {
        if(doorId) {
            try {
                const token = localStorage.getItem("@TOKEN")
                const res = await api.get(
                    `/permissions/pet-doors/${doorId}`,
                    { headers: { Authorization: `Bearer ${token}` } }
                )
                setDetails(res.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response?.data.message)
            }
        }
    }

    useEffect(() => {
        (async () => {
            await refreshDetails()
        })()
    }, [doorId])

    return { details, setDoorId, refreshDetails }
}