
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  presets: [
    require('@availity/design-tokens/dist/presets/tailwindPreset')
  ],
  variants: {
    extend: {},
  },
  plugins: [],
}
