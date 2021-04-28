const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const postcssFocusVisible = require('postcss-focus-visible')

module.exports = {
  plugins: [tailwindcss, autoprefixer, postcssFocusVisible]
}
