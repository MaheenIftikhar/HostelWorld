
import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      screens: {
        'sm': '300px', 'max': '670px',
        // => @media (min-width: 640px) { ... }
  
        'md': '670px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '960px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1200px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(-50px) translateY(300px) rotate(-15deg)' },
          '100%': { transform: 'translateX(0px) translateY(0px) rotate(-15deg)' },
        },
        wiggle2: {
          '0%': { transform: 'translateX(-150px) translateY(300px) rotate(-15deg)'},
          '100%': { transform: 'translate(0px) rotate(-15deg)' },
        },
      
        wiggle3: {
          '0%': { transform: ' translateY(300px) rotate(-15deg)' },
          '100%': { transform: 'translateX(0px) translateY(0px) rotate(-15deg)' },
       
        },
        wiggle4: {
          '0%': { transform: ' translateX(300px) translateY(500px) rotate(-15deg)' },
          '100%': { transform: 'translate(0px) rotate(-15deg)' },
       
        },
        wiggle5: {
          '0%': { transform: ' translateX(150px) rotate(-15deg)' },
          '100%': { transform: 'translateX(0px) rotate(-15deg)' },
       
        },
        wiggle6: {
          '0%': { transform: ' translateX(80px) rotate(-15deg)' },
          '100%': { transform: 'translateX(0px) rotate(-15deg)' },
       
        },
        wiggle7: {
          '0%': { transform: 'translate(200px) rotate(-15deg)' },
          '100%': { transform: 'translate(0px) rotate(-15deg)' },
       
        },
        wiggle8: {
          '0%': { transform: ' translateX(100px) rotate(-15deg)' },
          '100%': { transform: 'translateX(0px) rotate(-15deg)' },
       
        },
        wiggle9: {
          '0%': { transform: ' translateX(-100px) rotate(-15deg)' },
          '100%': { transform: 'translateX(0px) rotate(-15deg)' },
       
        },
        wiggle10: {
          '0%': { transform: ' translateX(300px) rotate(-15deg)' },
          '100%': { transform: 'translateX(0px) rotate(-15deg)' },
       
        },
        wiggle11:{
          '0%': { transform: ' translateX(-300px) rotate(-15deg)' },
          '100%': { transform: 'translateX(0px) rotate(-15deg)' },
        },
        rowanimation:{
          '0%':{    transform: 'translate(0)'},
          '100%':{transform: 'translate(-848px)'},
        },
        secondrowanimation:{
          '0%':{transform: 'translate(-848px)'},
          '100%':{transform: 'translate(0)'},
        },
        card: {
          '0%': { opacity: '0', transform: 'translate(25%)' },
          '100%': { opacity: '0.5', transform: 'translate(0)' },
        },
        animate:{
         '0%': { transform: ' translateY(200px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        animationChina:{
          '0%': { transform: ' translateX(-100px) translateY(100px)' },
          '100%': { transform: 'translateX(-7300px) translateY(20px)' },
        }
        
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-gradient': 'linear-gradient(90deg, #56228bb3 10.67%, #cc0074b3 95.35%)',
      },
      clipPath: {
        mypolygon: "polygon(0 3rem, 100% 0, 100% 100%, 0 100%)",
        mynewsletter:'polygon(0 0, 100% 0, 100% calc(100% - 3rem), 0 100%)',
        downloadsection:'polygon(0 0,0 100%,100% calc(100% - 3rem),100% 3rem)',
        blacksection:'polygon(0 calc(100% - 3rem), 0 3rem, 100% 0, 100% 100%)',
yellowpolygon:"polygon(0 0, 100% 0, calc(100% - 4px) 100%, 0 100%)",
skybluepolygon:"polygon(0 0, 100% 0, calc(100% - 4px) 100%, 0 100%)",
darkbluepolygon:"polygon(0 0, 100% 0, calc(100% - 4px) 100%, 0 100%)",
purplepolygon:"polygon(0 calc(100% - 3rem), 0 3rem, 100% 0, 100% 100%)",

    },
    opacity: {
      'active': '1',
      'inactive': '0.5',
    },
    },
  },
  plugins: [
    require('tailwind-clip-path'),nextui()
  ],
};
export default config;
