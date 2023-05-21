/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#2C2C34",
        themeDarker: "#1F1E1F",
        link: "#FFD15C",
        yello:"#0CA88E",
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
