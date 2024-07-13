/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'karotGreen': '#6D8B3A',
        'karotOrange': ' #FF7F29',
      }
    },
  },
  plugins: [],
}