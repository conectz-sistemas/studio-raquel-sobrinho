/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F9F5F0",        // bege claro
        primary: "#8A1538",   // marsala
        accent: "#CFA66B",    // dourado suave
        text: "#2C2C2C",      // cinza carvão
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.06)" },
      borderRadius: { xl2: "1rem" },
      /* 👇 animação shimmer */
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        beam: {
          "0%":   { transform: "translateX(-120%)", opacity: "0" },
          "10%":  { opacity: "1" },
          "90%":  { opacity: "1" },
          "100%": { transform: "translateX(120%)", opacity: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 1.4s infinite",
        beam: "beam 900ms ease-out",
      },
    },
  },
  plugins: [],
};
