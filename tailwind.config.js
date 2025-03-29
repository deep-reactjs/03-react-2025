/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        8: "32px",
      },
      colors: {
        background: "#181818",
        inputBg: "#1F1F1F",
        primary: {
          100: "#FDE7F7",
          200: "#FCDBF3",
          300: "#FAB5E7",
          400: "#EE10B0",
          500: "#D60E9E",
          600: "#BE0D8D",
          700: "#B30C84",
          800: "#8F0A6A",
          900: "#6B074F",
          950: "#53063E",
        },
        secondary: {
          100: "#E7F5FD",
          200: "#DBF0FD",
          300: "#B4E1FA",
          400: "#0E9EEF",
          500: "#0D8ED7",
          600: "#0B7EBF",
          700: "#0B77B3",
          800: "#085F8F",
          900: "#6B074F",
          950: "#053754",
        },
      },
      backgroundImage: {
        "album-bg":
          "linear-gradient(90deg, rgba(17, 113, 226, 0.8) 0%, rgba(139, 203, 231, 0.5) 100%)",
        "artist-bg": "liner-gradient(0deg, #0C0B0B 100% 0%, #000000 2% 100%)",
      },
    },
  },
  plugins: [],
};
