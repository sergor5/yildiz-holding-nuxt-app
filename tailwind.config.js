const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        primary: {
          DEFAULT: '#EA2044',
          hover: '#c91535',
          active: '#9e0a25',
        },
        secondary: '#4D000D',
        trueGray: colors.trueGray,
      },
      dropShadow: {
        glow: '0 0 10px rgba(255, 255, 255, 0.59)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
