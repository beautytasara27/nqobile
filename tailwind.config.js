/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#0F1F31",
        themeDarker: "#0e1721",
        link: "#FFD15C",
        yello:"#F9D74C",
        bleu:"#6C6CE5",
        pynk:"#F97B8B"
        
      },
      fontFamily: {
        "rubik-regular": ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
