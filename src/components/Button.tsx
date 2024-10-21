import { ComponentPropsWithoutRef, forwardRef } from "react"

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
    textColor: string;
    bgColor: string;
    extraTwStyles?: string;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({ bgColor, textColor, children, extraTwStyles, ...props}, ref) => {
    return (
        <button ref={ref} {...props} className={`py-2 px-4 w-fit ${textColor} ${bgColor} rounded ${extraTwStyles}`}>
            {children}
        </button>
    )
})

export default Button
