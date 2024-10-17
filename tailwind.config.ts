/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                lightPurple: "#B6ACC5",
                mainPurple: "#827397",
                darkPurple: "#362E41",
                fontColor: "#5F5B5B",
                lightNeutral: "#EEEEEE",
                mainNeutral: "#E9D5CA",
                darkNeutral: "#D9D9D9",
                trueNeutral: "#AAAAAA",
    
            },
        },
        
        fontFamily: {
            mainFont: "Poppins, sans-serif",
        },
    },
    plugins: [],
}

