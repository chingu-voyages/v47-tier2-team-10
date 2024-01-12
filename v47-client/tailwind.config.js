/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navGreen: "#19603b",
        navYellow: "#f4a261",
        navBlack: "#02140a",
        navWhite: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
