/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },

  //there are two class two use the theme the darkmode and the lightmode it uses the media and rhe class if we want to use it then the 
  //darkmode should be equals to the class
  darkMode:"class",
  plugins: [],
}

