import { forwardRef, HTMLProps } from "react"

type IInputType = "text" | "password"

interface IInputProps extends HTMLProps<HTMLInputElement> {
    label: string, 
    placeholder: string,
    type: IInputType,
    id: string,
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(({ label, id, ...props }, ref) => {
    return (
        <>
            <div className="flex flex-col items-start min-w-[210px] max-w-[400px] w-full">
                <label htmlFor={id} className="font-semibold text-sm text-fontColor">{label}</label>
                <input ref={ref} id={id} {...props} className=" w-full rounded p-2 bg-darkNeutral placeholder:text-xs placeholder:text-fontColor placeholder:font-normal" />
            </div>
        </>
    )
})