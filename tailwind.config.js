/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'screen1000px': '1000px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'screen1300px': '1300px',
    },
    extend: {
     
    },
  },
  plugins: [],
}
