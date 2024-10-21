import { ComponentPropsWithoutRef, forwardRef } from "react"

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
    textColor: string;
    bgColor: string;
    extraTwStyles?: string;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({ bgColor, textColor, children, extraTwStyles, ...props}, ref) => {
    return (
        <button ref={ref} {...props} className={`p-1 w-[100px] ${textColor} ${bgColor} rounded ${extraTwStyles}`}>
            {children}
        </button>
    )
})

export default Button
