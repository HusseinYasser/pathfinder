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
        'wall': '#0C3547',
        'visited': '#40CEE3',
        'path': '#FFFE6A',
      },
      fontFamily:
      {
        'poppins': 'Poppins'
      },
      width:
      {
        'cell': '2%'
      }
    },
    animation: {
      // Add your custom animations here
      fill: 'fill 0.2s forwards',
      visitedFill: 'visitedFill 1s forwards',
      pathFill: 'pathFill 1s forwards',
      'slide-in': 'slide-in 0.5s ease-out'
    },
  },
  plugins: [],
}

