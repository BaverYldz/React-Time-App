/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        RbtCondensed: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

