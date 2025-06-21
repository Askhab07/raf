/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ios': { 'raw': '(hover: none)' },
        'android': { 'raw': '(hover: none) and (-webkit-touch-callout: none)' }
      }
    },
  },
  plugins: [],
}

