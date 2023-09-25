/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins-Reg"],
        poppinsMed: ["Poppins-Med"],
        firaCodeBold: ["FiraCode-Bold"],
        dancingScript: ["Dancing-Script"],
        openSansBold: ["OpenSans Bold"],
      },
    },
  },
  plugins: [],
};
