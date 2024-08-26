/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'primary-color' : '#393e46',
        'text-color' : '#f2f2f2',
        'background-color' : '#222831',
        'secondary-color' : '#f96d00',
        'my-bg-color' : '#2f2f2f'
      }
    },
  },
  plugins: [],
}

