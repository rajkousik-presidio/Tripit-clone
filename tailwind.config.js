/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "1200px",
        lg: "1048px",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    flex: {
      2: "2 2 0%",
    },
    colors: {
      primary: "#0E7AC5", // Replace this with your primary color value
    },
  },
  plugins: [],
};
