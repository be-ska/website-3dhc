const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.gray,
      yellow: colors.amber,
    },
    extend: {},
    container:{
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}