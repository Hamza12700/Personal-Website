/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        firaCodeBold: ["Fira Code"],
        dancingScript: ["Dancing Script"],
        openSansBold: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
