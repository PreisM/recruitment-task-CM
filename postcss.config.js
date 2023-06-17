const tailwindConfig = require('./tailwind.config.js')

module.exports = {
  plugins: {
    tailwindcss: {
      config: tailwindConfig
    },
    autoprefixer: {}
  }
}
