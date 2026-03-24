/** @type {import('tailwindcss').config} */
module.exports={
    content:[
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme:{
        extend:{
            backgroundImage:{
                "gradient-radical":"radical-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                "conic-gradient(from 180deg at 50% 50%,var(--tw-gradient-stops)",
            },
        },
        screens:{
            xl:{
                max:'1400px'
            },
            lg:{
                max:'1150px'
            },
            md:{
                max:'757px'
            },
            sm:{
                max:'639px'
            }

        },
    },
    plugins:[]
};