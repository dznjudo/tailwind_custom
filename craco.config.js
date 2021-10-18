module.exports = {
    style: {
      mdoe: 'file',
        postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }