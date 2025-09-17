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
    },
  },
  plugins: [],
};
