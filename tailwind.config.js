/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hahmlet:"'Hahmlet', serif;",
        titillium: "'Titillium Web', sans-serif;",
      }
    },
  },
  plugins: [],
}
