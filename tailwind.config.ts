import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#FFFFFF",
        muted: "#FFFFFF",
        primary: "#FACE8D",
        inverse: "#081212",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        bitter: ["var(--font-bitter)"],
        merida: ["var(--font-merida)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
