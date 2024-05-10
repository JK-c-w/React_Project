import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      keyframes:{
        swipeL:{
          '0%':{transform:'translateX(-100%)'},
          '100%':{transform:'translateX(0)'}
        },
        swipeR:{
          '0%':{transform:'translateX(100%)'},
          '100%':{transform:'translateX(0)'}
        },
        zoom:{
         '0%':{transform:'scale(1)'},
         '100%':{transform:'scale(0.9)'}

        }


      },
    },
  },
  plugins: [],
}

