/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        custom: "#8794BA",
        second: "#EF2A82",
      },
      height: {
        custom1: "815px",
        custom2: "1000px",
      },
    },
  },
  plugins: [],
};
