import { useEffect, useState } from "react";
import { IBlockRange, IDoorPermissionDetails } from "../../../types/permission.types";
import { api } from "../../../service/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export default function useDoorDetails() {

    const [doorId, setDoorId] = useState<string>()
    const [details, setDetails] = useState<IDoorPermissionDetails>()

    const updateBlockRanges = async (newRanges:IBlockRange[]) => {
        try {
            const token = localStorage.getItem("@TOKEN")
            const res = await api.patch(
                `/permissions/pet-doors/${doorId}`,
                newRanges,
                { headers: { Authorization: `Bearer ${token}` } }
            )
            setDetails(prev => ({ pets: prev!.pets, blockRanges: res.data.blockRanges }))
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response?.data.message)
        }
    }

    const deleteBlockRange = async (index:number) => {
        details!.blockRanges.splice(index, 1)
        await updateBlockRanges(details!.blockRanges)
    }

    const createBlockRange = async (blockRange:IBlockRange) => {
        await updateBlockRanges([...details!.blockRanges, blockRange])
    }

    useEffect(() => {
        (async () => {
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
        })()
    }, [doorId])

    return { details, setDoorId, deleteBlockRange, createBlockRange }
}