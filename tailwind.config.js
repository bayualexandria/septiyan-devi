/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./assets/js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#3E4E6B",
      },
      fontFamily: {
        euphoria: ["Euphoria Script"],
        kurale: ["Kurale"],
        sacramento: ["sacramento"],
      },
    },
  },
  plugins: [],
};
