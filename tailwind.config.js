/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        "asnaro-blue": "#255bb3", 
        "asnaro-yellow": "#ffaa00",
        "asnaro-grey": "#d9d9d9",
    },
    screens: {
      sm: '',
    },
    },
  },
  plugins: [],
}

