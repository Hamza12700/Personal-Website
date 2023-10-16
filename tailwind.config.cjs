/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        firaCodeBold: ["Fira Code"],
        openSansBold: ["Open Sans"],
      },
      backgroundImage: {
        backgroundFull: "url('./src/images/background.webp')",
        backgroundHalf: "url('./src/images/backgroundx1920.webp')"
      },
      backgroundColor: {
        sweetBlack: "#131314"
      }
    },
  },
  plugins: [],
};
