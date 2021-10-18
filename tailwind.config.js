const theme = require('./tokens.js')  // replace with availity colors

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          main: theme => theme(colors.blue[500]),
          lighter: theme => theme(colors.blue[300]),
          darker: theme => theme(colors.blue[700]),
        },
        secondary: {
          main: theme => theme(colors.green[600]),
          lighter: theme => theme(colors.green[400]),
          darker: theme => theme(colors.green[800]),
        },
        error: theme => theme(colors.red[800]),
        warning: theme => theme(colors.yellow[600]),
        info: theme => theme(colors.blue[500]),
        success: theme => theme(colors.green[600]),
        blue: {
          50:  theme.colors.blue[50].value,
          100: theme.colors.blue[100].value,
          200: theme.colors.blue[200].value,
          300: theme.colors.blue[300].value,
          400: theme.colors.blue[400].value,
          500: theme.colors.blue[500].value,
          600: theme.colors.blue[600].value,
          700: theme.colors.blue[700].value,
          800: theme.colors.blue[800].value,
          900: theme.colors.blue[900].value
        },
        indigo: {
          50:  'var(--colors-indigo-50)',
          100: 'var(--colors-indigo-100)',
          200: 'var(--colors-indigo-200)',
          300: 'var(--colors-indigo-300)',
          400: 'var(--colors-indigo-400)',
          500: 'var(--colors-indigo-500)',
          600: 'var(--colors-indigo-600)',
          700: 'var(--colors-indigo-700)',
          800: 'var(--colors-indigo-800)',
          900: 'var(--colors-indigo-900)',
        },
        gray: {
          50:  theme.colors.gray[50].value,
          100: theme.colors.gray[100].value,
          200: theme.colors.gray[200].value,
          300: theme.colors.gray[300].value,
          400: theme.colors.gray[400].value,
          500: theme.colors.gray[500].value,
          600: theme.colors.gray[600].value,
          700: theme.colors.gray[700].value,
          800: theme.colors.gray[800].value,
          900: theme.colors.gray[900].value
        },
        purple: {
          50:  'var(--colors-purple-50)',
          100: 'var(--colors-purple-100)',
          200: 'var(--colors-purple-200)',
          300: 'var(--colors-purple-300)',
          400: 'var(--colors-purple-400)',
          500: 'var(--colors-purple-500)',
          600: 'var(--colors-purple-600)',
          700: 'var(--colors-purple-700)',
          800: 'var(--colors-purple-800)',
          900: 'var(--colors-purple-900)',
        },
        red: {
          50:  theme.colors.red[50].value,
          100: theme.colors.red[100].value,
          200: theme.colors.red[200].value,
          300: theme.colors.red[300].value,
          400: theme.colors.red[400].value,
          500: theme.colors.red[500].value,
          600: theme.colors.red[600].value,
          700: theme.colors.red[700].value,
          800: theme.colors.red[800].value,
          900: theme.colors.red[900].value
        },
        yellow: {
          50:  'var(--colors-yellow-50)',
          100: 'var(--colors-yellow-100)',
          200: 'var(--colors-yellow-200)',
          300: 'var(--colors-yellow-300)',
          400: 'var(--colors-yellow-400)',
          500: 'var(--colors-yellow-500)',
          600: 'var(--colors-yellow-600)',
          700: 'var(--colors-yellow-700)',
          800: 'var(--colors-yellow-800)',
          900: 'var(--colors-yellow-900)',
        },
        orange: {
          50:  theme.colors.orange[50].value,
          100: theme.colors.orange[100].value,
          200: theme.colors.orange[200].value,
          300: theme.colors.orange[300].value,
          400: theme.colors.orange[400].value,
          500: theme.colors.orange[500].value,
          600: theme.colors.orange[600].value,
          700: theme.colors.orange[700].value,
          800: theme.colors.orange[800].value,
          900: theme.colors.orange[900].value
        },
        green: {
          50:  'var(--colors-green-50)',
          100: 'var(--colors-green-100)',
          200: 'var(--colors-green-200)',
          300: 'var(--colors-green-300)',
          400: 'var(--colors-green-400)',
          500: 'var(--colors-green-500)',
          600: 'var(--colors-green-600)',
          700: 'var(--colors-green-700)',
          800: 'var(--colors-green-800)',
          900: 'var(--colors-green-900)',
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
