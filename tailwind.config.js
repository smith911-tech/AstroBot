/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm630: "630px",
      // => @media (min-width: 630px) { ... }
      sm768: "768px",
      // => @media (min-width: 768px) { ... }
      lg1000: "1000px",
      // => @media (min-width: 1000px) { ... }
      lg900: "900px",
      // => @media (min-width: 900px) { ... }
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
