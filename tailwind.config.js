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
        brown: { DEFAULT: "#CEBDAD", dark: "#87725E" },
        yellow: "#F9D849",
        beige: "#F0EBDF",
        orange: "#D6875A",
        gray: {
          80: "#333333",
          60: "#666666",
          40: "#999999",
          20: "#CCCCCC",
        },
      },
    },
    fontFamily: {
      sans: ["Noto Serif TC", "serif"],
    },
  },
  plugins: [],
};
