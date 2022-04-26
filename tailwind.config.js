module.exports = {
  content: [
    './pages/**/*.{html,js,tsx}',
    './components/**/*.{html,js,tsx}',
  ],
  theme: {
    extend: {
      colors : {
        interaction: {
          default: "#FF922D"
        },
        primary: "#3C6676",
        secondary: "#E8F0F3"
      },
      fontFamily: {
        serif: "Baskervville"
      }
    },
  },
  plugins: [],
}
