import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

interface IButton {
    text: string,
    textColor: string,
    bgColor: string 
}

export const DefaultButton = ({ text, bgColor, textColor}: IButton
    & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) => {
    return (
        <button className={`p-1 w-[100px] ${textColor} ${bgColor} hover:scale-105 transition-transform duration-500 rounded`} text->{text}</button>
    )
}