/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      es : '0.6rem'
    },
    borderWidth : {
      '1.5' : '1.5px',
      '2' : '2px'
    },
    width : {
      '2/5' : '60%',
      '1/3' : '23.33%'
    }
  },
  plugins: [],
}