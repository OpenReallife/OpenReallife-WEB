const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      or: {
        green: '#009B72',
        lightgreen: '#00D49C',
        red: '#DA0909',
        lightblue: '#363D4D',
        blue: '#161920',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
