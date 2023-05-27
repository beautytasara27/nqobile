/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#142931",  //#142931, #143443
        themeDarker: "#1E7E87", //#1E7E87, #1E6F5C
        link: "#FFD15C",
        mint:"#4ADBCB", //#0CA88E,#4ADBCB
        yello:"#FFFF99", //, #0CA88E, #E95E4F
        bleu:"#6C6CE5",
        pynk:"#F97B8B"
        
      },
      fontFamily: {
        "rubik-regular": ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
        "anton-regular": ["Anton-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
