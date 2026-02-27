import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1a1a1a",
        cream: "#f5f0eb",
        warmgold: "#b8956a",
        softgray: "#e8e4df",
        lightcream: "#faf8f5",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "Helvetica Neue", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          "2xl": "1440px",
        },
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
