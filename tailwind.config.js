// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#A6A6A6",
        backgroundColor: "#F0F1F5",
        freeColor: "#00B69B",
        paidColor: "#FCBE2D",
        inputBackground: " #DADADA",
        sideBarColor: " #4CA1EB",
      },
    },
  },
  plugins: [],
};
