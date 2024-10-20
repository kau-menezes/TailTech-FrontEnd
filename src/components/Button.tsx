import { ComponentPropsWithoutRef, forwardRef } from "react"

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
    textColor: string,
    bgColor: string 
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({ bgColor, textColor, children, ...props}, ref) => {
    return (
        <button ref={ref} {...props} className={`p-1 w-[100px] ${textColor} ${bgColor} hover:scale-105 transition-transform duration-500 rounded`}>
            {children}
        </button>
    )
})

export default Button
