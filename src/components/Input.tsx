import { ComponentPropsWithoutRef, forwardRef } from "react"

interface IInputProps extends ComponentPropsWithoutRef<'input'> {
    label?: string, 
    id: string,
}

const Input = forwardRef<HTMLInputElement, IInputProps>(({ label, id, className, ...props }, ref) => {
    return (
        <>
            <div className={`flex flex-col items-start min-w-[210px] max-w-[400px] w-full ${className}`}>
                {label &&
                    <label htmlFor={id} className="font-semibold text-sm text-fontColor">{label}</label>
                }
                <input ref={ref} id={id} {...props} className=" w-full rounded p-2 bg-darkNeutral placeholder:text-xs placeholder:text-fontColor placeholder:font-normal" />
            </div>
        </>
    )
})

export default Input
