/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'darkblue': '#222831',
        'lightblue': '#00ADB5',
        'darkgray': '#393E46',
        'lightgray': '#393E46',
      },
      fontFamily:
      {
        'poppins': 'Poppins'
      }
    },
  },
  plugins: [],
}

