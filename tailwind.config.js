/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#a4895a',
        accent: '#a4895a',
        secondary: '#4a3c27',
        tertiary: '#367689',
        fourth: '#0c2831;',
      },
      fontFamily: {
        primary: ['Reddit Sans', 'sans-serif'],
        secondary: ['Cattedrale', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
