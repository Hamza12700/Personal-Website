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
      backgroundColor: {
        sweetBlack: "#131314"
      }
    },
  },
  plugins: [],
};
