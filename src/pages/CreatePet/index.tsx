import { useEffect, useState } from "react";
import Header from "../../components/Header";
import StepCounter from "./components/StepCounter";
import usePetRegister from "./hooks/usePetRegister";
import Button from "../../components/Button";
import PetCard from "../../components/PetCard";
import { Link } from "react-router-dom";

export default function CreatePet() {

    const { petToRegister, updatePetData } = usePetRegister()
    const [step, setStep] = useState(1)
    
    useEffect(() => {
        if(petToRegister) {
            setStep(3)
        }
    }, [petToRegister])

    return(
        <div className="flex flex-col-reverse bg-lightNeutral w-full">
            <Header/>

            <div className="flex flex-col gap-16 w-[95%] max-w-[1000px] m-auto pt-[10vh] min-h-[100vh] md:pl-14 pb-32">
                <h1 className="text-4xl font-semibold text-fontColor">Register new pet 🐾</h1>
                
                <StepCounter currentStep={step} steps={["Open and turn on the tag", "Pass the tag on the door", "Save pet details:"]}/>

                {
                    step === 1 &&
                    <Button
                        bgColor="bg-mainPurple"
                        textColor="text-white"
                        extraTwStyles="m-auto"
                        onClick={() => setStep(2)}
                    >Done!</Button>
                }

                {
                    step === 3 && petToRegister &&
                    <div className="w-full flex flex-col gap-8 items-center">
                        <PetCard pet={petToRegister} updateData={updatePetData} />

                        <Link to="/pets">
                            <Button bgColor="bg-mainPurple" textColor="text-white">Done!</Button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}
