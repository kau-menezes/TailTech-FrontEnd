import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type IInputType = "text" | "password"

interface IInput {
    label: string, 
    placeholder: string,
    type: IInputType,
    id: string,
}

export const Input = ({ label, placeholder, type, id, ...props}: IInput
    & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => {
    return (
        <>
            <div className="flex flex-col items-start min-w-[210px] max-w-[400px] w-full">
                <label htmlFor={id} className="font-semibold text-sm text-fontColor">{label}</label>
                <input {...props} type={type} placeholder={placeholder} className=" w-full rounded p-2 bg-darkNeutral placeholder:text-xs placeholder:text-fontColor placeholder:font-normal" />
            </div>
        </>
    )
}