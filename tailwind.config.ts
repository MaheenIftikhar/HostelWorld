
import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'sm': '300px', 'max': '690px',
        // => @media (min-width: 640px) { ... } 
  
        'md': '695px', 'md-max':'900px',
        // => @media (min-width: 768px) { ... }
  
        // 'lg': '670px', 'lg-max':'960px',
        'lg': '1000px', 'lg-max':'1536px',
        // 'lg': '900px', 'lg-max':'1200px',
        // => @media (min-width: 1024px) { ... }
  
        // 'xl': '1200px',
        // => @media (min-width: 1280px) { ... }
  
        // '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      containerType: {
        'inline-size': 'inline-size',
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
          '100%': { transform: 'translateX(-730px) translateY(20px)' },
        },
        animateIreland:{
          '0%': { transform: ' translateX(140px) translateY(30px)' },
          '100%': { transform: 'translateX(400px) translateY(30px)' },
        }
        ,
        animationkorea:{
          '0%': { transform: ' translate(120px)' },
          '100%': { transform: 'translateX(500px) translateY(-180px)' },
        },
        animationBrazil:{
          '0%': { transform: ' translate(-100px)' },
          '100%': { transform: 'translateX(-540px) translateY(-180px)' },
        },
       
        animationSpain:{
          '0%': { transform: ' translateX(120px) translateY(90px)' },
          '100%': { transform: 'translateX(230px) translateY(100px)' },
        },
        animationUSA:{
          '0%': { transform: ' translateX(125px) translateY(-20px)' },
          '100%': { transform: 'translateX(145px) translateY(-20px)' },
        },
        animationItaly:{
          '0%': { transform: ' translateX(110px) translateY(-110px)' },
          '100%': { transform: 'translateX(130px) translateY(-190px)' },
        },
        animationPoland:{
          '0%': { transform: ' translateX(-170px) translateY(-60px)' },
          '100%': { transform: 'translateX(-200px) translateY(-70px)' },
        },
        animationPortugal:{
          '0%': { transform: ' translateX(-140px) translateY(-80px)' },
          '100%': { transform: 'translateX(-260px) translateY(-195px)' },
        },
        animationFrance:{
          '0%': { transform: ' translateX(-40px) translateY(60px)' },
          '100%': { transform: 'translateX(-270px) translateY(6px)' },
        },
        animationGermany:{
          '0%': { transform: ' translateX(-100px) translateY(160px)' },
          '100%': { transform: 'translateX(-460px) translateY(150px)' },
        },
        hostelCard:{
          '0%': { transform: 'scale(7.5) rotate(15deg) translateX(-50px) translateY(-50px)' },
          '100%': { transform: 'scale(1) rotate(0) translate(0)' },
        }

    },
    
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-gradient': 'linear-gradient(90deg, #56228bb3 10.67%, #cc0074b3 95.35%)',
      
            'hero-pattern': "url('https://a.hwstatic.com/image/upload/v1675960377/pwa/bg.desktop.svg')",
           
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
  boxShadow: {
    'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  borderRadius: {
    'lg': '0.5rem',
  },
  maxWidth: {
    '500': '500px',
  },
  colors: {
    'custom-white': '#ffffff',
    'custom-orange': '#f25621',
  },
  plugins: [
    require('tailwind-clip-path'),nextui()
    
  ],
};
export default config;
