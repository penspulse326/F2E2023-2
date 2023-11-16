/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DD806F",
        pink: "#E49794",
        green: "#50B184",
        blue: "#51A8BC",
        brown: "#CEBDAD",
        yellow: "#F9D849",
        beige: "#F0EBDF",
        orange: "#D6875A",
      },
    },
    fontFamily: {
      sans: ["Noto Serif TC", "serif"],
    },
  },
  plugins: [],
};
