const theme = require('./tokens.js')  // replace with availity colors

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  presets: [
    require('av-design-tokens/src/presets/tailwindPreset')
  ],
  variants: {
    extend: {},
  },
  plugins: [],
}
