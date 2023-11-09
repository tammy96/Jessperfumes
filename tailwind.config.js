/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Heebo', 'sans-serif'],
        'unna': ['Unna', 'sans-serif']
        // You can define multiple font families or variations here
      },
      colors: {
        navpurple: "#301934",
        navgold: "#daa520",
        primaryblack: "#333",
        lightpink: "#FFF5EE",
        secondlightpink: "#F0D8D8",
     }
    },
  },
  plugins: [],
}

