module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        "black-gray": "#1f2326",
        "light-gray": "#444444",
        "deeper-blue": "#292495",
        "deep-blue": "#2E27BA",
        "dark-blue": "#5281ab",
        blue: "#70a1c2",
        red: "#BB505B",
        "dark-pink": "#B04E73",
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
      container: {
        // pAuto: "auto",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        md: "0 5px 13px 0 rgba(0,0,0,0.41)",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tw-elements/dist/plugin")],
};
