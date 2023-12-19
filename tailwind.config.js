/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CDA274",
      },
      fontFamily: {
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
