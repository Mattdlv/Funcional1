/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF7F0",
        paper: "#F6F1E7",
        beige: {
          50: "#F8F3EA",
          100: "#F0E8D8",
          200: "#E4D8BE",
          300: "#D3C3A2",
        },
        olive: {
          50: "#F1F2E9",
          100: "#DFE2CA",
          300: "#AEB587",
          500: "#7C8358",
          600: "#636A44",
          700: "#4C5233",
        },
        sage: {
          100: "#E7ECE1",
          300: "#BFCBB0",
          500: "#93A37E",
        },
        earth: {
          400: "#B79C7D",
          500: "#9C7F5F",
          600: "#7C6448",
          700: "#5B4A36",
        },
        lavender: {
          100: "#EDE9F2",
          300: "#CBC0DA",
          500: "#A897BF",
        },
        gold: {
          400: "#C9AD77",
          500: "#B79658",
        },
        ink: "#2E2A22",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "'Playfair Display'", "serif"],
        display: ["'Playfair Display'", "serif"],
        sans: ["'Jost'", "'Montserrat'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
