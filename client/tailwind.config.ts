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
        600: '#9483C3',
        700: '#7C68B6',
        800: '#473773', //marion
        900: '#3D2E60',
        950: '#2C2145',
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
        900: '#DE4917',
        950: '#B93D13'
      },
      gray:{
        50: '#f9fafb',
        100: ' #f3f4f6',
        200: ' #e5e7eb',
        300: '#d1d5db ',
        400: '#9ca3af ',
        500: '#6b7280 ',
        600: '#4b5563 ',
        700: ' #334155', 
        800: ' #1e293b',
        900: '#0f172a ',
        950:'#020617 '
      },
      emerald:{
        50: ' #ecfdf5',
        100: ' #d1fae5',
        200: ' #a7f3d0',
        300: '#6ee7b7 ',
        400: '#34d399 ',
        500: '#10b981 ',
        600: '#059669 ',
        700: ' #047857', 
        800: ' #065f46',
        900: '#064e3b ',
        950:' #022c22'
      },
      purple:{
        50: ' #faf5ff',
        100: ' #f3e8ff',
        200: '#e9d5ff ',
        300: ' #d8b4fe',
        400: ' #c084fc',
        500: '#a855f7 ',
        600: ' #9333ea',
        700: ' #7e22ce', 
        800: ' #6b21a8',
        900: '#581c87 ',
        950:'#3b0764 '
      }
    }
  },
  plugins: [],
}