import { useEffect, useState } from "react"
import { api } from "../../../service/api"
import { IPet } from "../../../types/pets.types"
import { AxiosError } from "axios"
import { toast } from "react-toastify"

export default function usePetRegister() {

    const [petToRegister, setPetToRegister] = useState<IPet | null>(null)
    const [cycle, setCycle] = useState(true)

    const getPetToRegister = async () => {
        try {
            const token = localStorage.getItem("@TOKEN")
            const res = await api.get("/pets/register", { headers: { Authorization: `Bearer ${token}` } })
            setPetToRegister(res.data)
        } catch (e) {
            setPetToRegister(null)
        }
    }

    const updatePetData = async () => {
        if(petToRegister) {
            try {
                const token = localStorage.getItem("@TOKEN")
                const res = await api.get(`/pets/${petToRegister.petId}`, { headers: { Authorization: `Bearer ${token}` } })
                setPetToRegister(res.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response?.data.message)
            }
        }
    }

    useEffect(() => {
        const id = setInterval(async () => {
            setCycle(prev => !prev)
        }, 2000)
        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        (async () => {
            if(!petToRegister) {
                await getPetToRegister()
            }
        })()
    }, [cycle])

    return { petToRegister, updatePetData }
}