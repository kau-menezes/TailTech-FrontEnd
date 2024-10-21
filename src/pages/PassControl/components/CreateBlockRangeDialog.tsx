import { Modal } from "@mui/material";
import { FormEvent, useState } from "react";
import Button from "../../../components/Button";
import { TimePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "../../../service/api";

interface ICreateBlockRangeDialogProps {
    petDoorId: string;
    refresh: () => Promise<void>;
}

export default function CreateBlockRangeDialog({ refresh, petDoorId }:ICreateBlockRangeDialogProps) {

    const [open, setOpen] = useState(false)
    const [startTime, setStartTime] = useState<Dayjs | null>(null)
    const [endTime, setEndTime] = useState<Dayjs | null>(null)

    const handleClose = () => setOpen(false)

    const submit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(startTime && endTime) {
            try {
                const token = localStorage.getItem("@TOKEN")
                await api.post(
                    `/permissions/pet-doors/${petDoorId}`,
                    {
                        startHour: startTime.hour(),
                        startMinute: startTime.minute(),
                        endHour: endTime.hour(),
                        endMinute: endTime.minute(),
                    },
                    { headers: { Authorization: `Bearer ${token}` } }
                )
                await refresh()
                handleClose()
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response?.data.message)
            }
        }
    }

    return(
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <form
                    onSubmit={submit}
                    className="bg-white rounded-lg shadow-xl p-4 w-[95%] mx-auto my-[20vh] max-w-[400px] flex flex-col gap-4"
                >
                    <h3>Create Block Range</h3>
                    <TimePicker
                        value={startTime}
                        onChange={(newValue) => setStartTime(newValue)}
                        views={["hours", "minutes"]}
                        ampm={false}
                    />
                    <TimePicker
                        value={endTime}
                        onChange={(newValue) => setEndTime(newValue)}
                        views={["hours", "minutes"]}
                        ampm={false}
                    />
                    <Button bgColor="bg-mainPurple" textColor="text-white" extraTwStyles="self-end">Create</Button>
                </form>
            </Modal>

            <button 
                onClick={() => setOpen(true)}
                className="bg-darkNeutral text-fontColor w-full rounded-md text-center px-8 py-1 transition-all hover:bg-mainPurple hover:text-white"
            >+</button>
        </>
    )
}