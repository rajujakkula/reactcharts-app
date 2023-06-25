/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        ...defaultTheme.screens,
      },

      fontFamily: {
        lato: "Lato",
        montserrat: "Montserrat",
      },

      width: {
        385: "44.7%",
      },
    },
  },
  plugins: [],
};
