import { useEffect, useState } from "react";
import Header from "../../components/Header";
import useDoors from "./hooks/useDoors";
import { IPetDoor } from "../../types/doors.types";
import DoorTab from "./components/DoorTab";
import useDoorDetails from "./hooks/useDoorDetails";
import { v4 as uuid } from "uuid";
import PetPermissionToggle from "./components/PetPermissionToggle";
import BlockRange from "./components/BlockRange";
import CreateBlockRangeDialog from "./components/CreateBlockRangeDialog";

export default function PassControl() {

    const { doors } = useDoors()
    const [door, setDoor] = useState<IPetDoor>()
    const { details, setDoorId, refreshDetails } = useDoorDetails()

    const handleSetDoor = (door: IPetDoor) => {
        setDoor(door)
        setDoorId(door.petDoorId)
    }

    useEffect(() => {
        if (doors.length > 0) {
            setDoor(doors[0])
            setDoorId(doors[0].petDoorId)
        }
    }, [doors])

    return (
        <div className="flex flex-col-reverse bg-lightNeutral w-full">
            <Header selected="passcontrol"/>
            <main className="min-h-screen py-10 flex flex-col gap-4 w-[95%] m-auto max-w-[800px] pb-80">
                <div className="flex items-center gap-3">
                    <h1 className="font-semibold text-3xl text-fontColor"> Pass Control</h1>
                    <img className="w-[40px]" src="/assets/icon/paw-title.png"></img>
                </div>

                {doors.length > 0 && details && door ?
                    <>
                        <div className="flex flex-col md:flex-row md:justify-between gap-8 bg-white rounded-md shadow-md p-2">
                            <div className="flex items-center text-fontColor">
                                {doors.map(d => (
                                    <DoorTab
                                        key={uuid()}
                                        door={d}
                                        handleSetDoor={handleSetDoor}
                                        selected={d.petDoorId === door?.petDoorId}
                                    />
                                ))}
                            </div>
                            <button className="bg-darkNeutral text-fontColor rounded-md text-center px-8 py-1 transition-all hover:bg-mainPurple hover:text-white">+</button>
                        </div>

                        <div className="bg-white rounded-md shadow-md py-8 px-4 md:min-h-[80vh] ">
                            <h2 className="font-semibold text-2xl text-fontColor">{door?.nickname}</h2>

                            <div className="flex flex-col md:flex-row-reverse mt-4 gap-4">

                                <div className="flex flex-col md:w-2/3 rounded-md shadow-md py-8 px-4">
                                    <p className="font-medium text-xl text-fontColor py-2">Block ranges ⏰</p>
                                    <p className="font-medium text-sm text-gray-500 border-b-[2px] py-2">No pet will be able to pass at these times</p>
                                    
                                    <div className="flex flex-col gap-4 mt-4">
                                        {details.blockRanges.map(br => (
                                            <BlockRange key={uuid()} blockRange={br} refresh={refreshDetails}/>
                                        ))}
                                        <CreateBlockRangeDialog refresh={refreshDetails} petDoorId={door.petDoorId}/>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center gap-4 md:w-1/3 md:justify-start">
                                    {details.pets.map(p => (
                                        <PetPermissionToggle key={uuid()} pet={p} petDoorId={door.petDoorId} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </> :
                    <h3>You don't have any doors registered yet.</h3>
                }
            </main>
        </div>
    )
}