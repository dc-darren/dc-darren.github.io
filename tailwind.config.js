/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        handwave: {
          '0%, 20%': { transform: 'none' },
          '32%': { transform: 'rotateZ(3deg) translateY(-20px)' },
          '35%': { transform: 'rotateZ(20deg) translateY(-20px)' },
          '38%': { transform: 'rotateZ(3deg) translateY(-16px)' },
          '41%': { transform: 'rotateZ(17deg) translateY(-18px)' },
          '44.5%': { transform: 'rotateZ(-2deg) translateY(-16px)' },
          '49%': { transform: 'rotateZ(2deg) translateY(-16px)' },
          '60%': { transform: 'none' },
        },
      },
      animation: {
        'dc-handwave': 'handwave 9s ease-in-out infinite',
      },
      colors: {
        dc: {
          'red': '#D83A3A',
          'black': '#1E1E1E',
          'gray': '#777777',
          'light-gray': '#E1E5EA',
          'white': '#FEFEFE',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'Manrope', defaultTheme.fontFamily.sans],
        'manrope': ['Manrope', 'Inter', defaultTheme.fontFamily.sans],
      },
      spacing: {
        '15': '60px',
        '25': '100px',
        '30': '120px',
      }
    },
  },
  plugins: [
    require('postcss'),
    require('autoprefixer'),
  ],
}
