/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dc: {
          'red': '#D83A3A',
          'black': '#1E1E1E',
          'gray': '#777777',
          'light-gray': '#E1E5EA',
          'white': '#FEFEFE',
        },
      },
      spacing: {
        '15': '60px',
        '25': '100px',
        '30': '120px',
      }
    },
  },
  plugins: [],
}
