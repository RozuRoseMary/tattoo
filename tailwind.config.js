module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      // pAuto: "auto",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        "black-gray": "#1f2326",
        "light-gray": "#444444",
        "dark-blue": "#5281ab",
        blue: "#70a1c2",
        red: "#BB505B",
        pink: "#c35d84",
        "light-pink": "#b88099",
        mint: "#67d4c7",
        purple: "#7e5bef",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
    },
    // extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
