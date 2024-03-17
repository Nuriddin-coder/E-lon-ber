/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1100px",
        },
      },
      colors: {
        Black: "#19191C",
        Primary: "#010101",
        Gray: "#979C9E",
        Clr1314: "#131418",
        Clr222: "#222222",
        ClrEA38: "#EA3838",
        Clr888: "#888888",
        ClrC2C2: "#C2C2C2",
        ClrLogoBg: "#24243E",
        Clr8c8c: "#8C8C8C",
        Clrf5f5: "#F5F5F5",
        Clr181d: "#181D27",
      },
      screens: {
        tablet: "768px",
        desktop: "980px",
      },
      gridTemplateColumns: {
        cardColumn: "repeat(auto-fit, minmax(160px, 1fr))",
      },
    },
  },
  plugins: [require("daisyui")],
};
