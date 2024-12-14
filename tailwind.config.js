/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px", // Breakpoint para pantallas pequeñas
      md: "769px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
