import { url } from "inspector"

/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      boxShadow:{
        'inset': 'inset 0 0 10px',
      },
      screens:{
        'sm':'640px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl':'1536px',
        '3xl':'1920px',
        '4xl': '2048px',
        '5xl': '2560px',
        '6xl': '2880px',
        '7xl': '5120px',
      },
    },
    fontFamily:{
      cookie: ['Cookie', 'cursive'],
      comfortaa: ['Comfortaa', 'serif'],
      merienda: ['Merienda', 'cursive'],

      "Dosis": ["Dosis", "sans-serif"],
      "Nunito":["Nunito", "sans-serif"],
      "Nunito-italic": ["Nunito-italic", "sans-serif"],
      "Sofia":["Sofia","cursive"]
    },
    letterSpacing:{
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
    },
    screens:{
      'xs': '320px',
      'sm': '640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
      '3xl': '1920px'
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      violet:{
        100: '#E1D8F7',
        200: '#D7C8F3',
        300: '#D0BEF2',
        400: '#C0A7EB', 
        500: '#B596E5',
        600: '#9483C3',//fails when paired with purple 300
        700: '#7C68B6',
        800: '#473773', //marion
        900: '#3D2E60',// failes at normal text when paired to orange 500
        950: '#2C2145',
      },//all violets fail when paired with orange 500
      purple:{
        50: '#221B37',//failes when paired to orange 500
        100: '#1A1429',//passes when paired to orange 500
        200: '#110D1C',
        300: '#09070E'
      },
      orange:{
        100: '#F8D1B4',
        200: '#F7BF9E',
        300: '#F6AD88',
        400: '#F69B72',
        500: '#F5895C',
        600: '#F19B7E',
        700: '#EE7E59',
        800:'#E85A29',//fs 
        900: '#DE4917', //fails when paired with purple 300
        950: '#B93D13'
      },
      darkOrange:{
        50:'#4A1808',
        100:'#371206',
        200:'#250C04',//passes when paired with orange 500
        300: '#120602',
      },
      gray:{
        50: '#f9fafb',
        100: ' #f3f4f6',
        200: ' #e5e7eb',
        300: '#d1d5db ',
        400: '#9ca3af ',
        500: '#6b7280 ',//fails when paired with purple 300
        600: '#4b5563 ',
        700: ' #334155', 
        800: ' #1e293b',
        900: '#0f172a ',//passes when paired to orange 500
        950:'#020617 '
      },
      jacarta: {  
        DEFAULT: '#473773',  
        50: '#D3CCE7',  
        100: '#C8BFE0',  
        200: '#B0A3D3',  
        300: '#9887C6',  
        400: '#806CB9',  
        500: '#6951AA',  
        600: '#58448F',  
        700: '#473773',  
        800: '#30254D',  
        900: '#181327',  
        950: '#0C0A14'},//tailwind shades using 473773
    },
  },
  plugins: [],
}