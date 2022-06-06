module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" ,"./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors :{
        primary:"rgba(47,34,17,1)"
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
