/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "1200px",
        lg: "1048px",
      },
      colors: {
        primary: "#0E7AC5",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      proxima_bold: ["MyCustomFontBold", "sans-serif"],
      proxima_regular: ["MyCustomFontRegular", "sans-serif"],
    },
    flex: {
      2: "2 2 0%",
    },
  },
  plugins: [],
};
