import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "beauty-bush": {
          50: "#fcf4f4",
          100: "#fae9ea",
          200: "#f5d6da",
          300: "#efc1c7",
          400: "#e18b99",
          500: "#d16276",
          600: "#bb435e",
          700: "#9d334e",
          800: "#842d46",
          900: "#722940",
          950: "#3e131f",
        },
        "pirate-gold": {
          50: "#fbf9eb",
          100: "#f7f0ca",
          200: "#f0e098",
          300: "#e7c95d",
          400: "#deb131",
          500: "#cf9b23",
          600: "#b87d1d",
          700: "#8e581a",
          800: "#77471c",
          900: "#653c1e",
          950: "#3b1e0d",
        },
        apricot: {
          50: "#fdf6f3",
          100: "#fbebe5",
          200: "#f8dbd0",
          300: "#f1c1b0",
          400: "#e79b7f",
          500: "#da7c59",
          600: "#c6613c",
          700: "#a64f2f",
          800: "#8a442a",
          900: "#733d29",
          950: "#3e1d11",
        },
      },
      fontFamily: {
        alegreya: ["Alegreya", "serif"],
      },
    },
  },
  plugins: [animations],
};
