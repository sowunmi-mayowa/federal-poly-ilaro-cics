/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cicsGreen: '#428E3A',
        cicsLightGreen: '#9fe7b3',
        cicsGrey: '#767676',
        cicsCyan: '#e0f5e6',
        cicsBlue: '#3b6fe9',
        cicsRed: '#e15151',
        cicslightGrey: '#d9d9d9'
      }
    },
  },
  plugins: [],
}
