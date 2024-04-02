/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Lato:['Lato', 'sans-serif'],
        Roboto:['Roboto', 'sans-serif'],
        Rosarvio:['Rosarivo', 'cursive'],
        oswald:['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

