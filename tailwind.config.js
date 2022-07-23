/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1D1815",
      },
      fontFamily: {
        main: "Abril Fatface",
        body: "Poppins",
      },
    },
  },
  plugins: [],
};
