import { Fragment } from "react/jsx-runtime";
import { v4 as uuid } from "uuid";

interface IStepCounterProps {
    steps: string[];
    currentStep: number;
}

export default function StepCounter({ currentStep, steps }:IStepCounterProps) {
    return(
        <div className="w-full flex items-center relative gap-1">
            {steps.map((step, index) => (
                <Fragment key={uuid()}>
                    <div className={`flex justify-center items-center rounded-full w-44 p-2 box-border aspect-square ${index+1 <= currentStep ? "bg-mainPurple" : "bg-gray-400"}`}>
                        <span className="text-4xl text-white font-semibold">{ index+1 }.</span>
                        <h5 className={`absolute right-0 left-0 top-24 m-auto w-full text-center text-mainPurple text-2xl font-semibold ${index+1 != currentStep && "hidden"}`}>{step}</h5>
                    </div>
                    {
                        index+1 < steps.length && 
                        <div className={`h-1 w-full rounded-lg ${index+1 < currentStep ? "bg-mainPurple" : "bg-gray-400"}`}></div>
                    }
                </Fragment>
            ))}
        </div>
    )
}