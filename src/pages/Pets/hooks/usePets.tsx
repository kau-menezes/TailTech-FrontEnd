import { useEffect, useState } from "react";
import { IPet } from "../../../types/pets.types";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "../../../service/api";

export default function usePets() {

    const [pets, setPets] = useState<IPet[]>([])

    const getPets = async () => {
        const token = localStorage.getItem("@TOKEN")
        try {
            const res = await api.get("/pets", { headers: { Authorization: `Bearer ${token}` } })
            setPets(res.data)
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response?.data.message)
        }
    }

    useEffect(() => {
        (async () => {
            await getPets()
        })()
    }, [])

    return { pets, getPets }
}