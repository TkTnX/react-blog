/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: "PT Sans",
      },
      colors: {
        hintColor: "#4a90e2",
        btns: "#232323",
      },
      screens: {
        vsm: "468px",
      },
    },
  },
  plugins: [],
};
