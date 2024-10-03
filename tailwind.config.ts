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
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#030303",
        "bold-gray": "#353535",
        gray: "#565656FF",
        'light-red': "rgba(249, 232, 233, 0.32)",
        'dark-gray': "rgba(230, 230, 230, 0.27)",
        'border': "rgba(249, 232, 233, 0.50)",
        'border-red': "rgba(211, 98, 107, 0.24)",
        'medium-red': "#E19399",
        'fade-red': "#F9E8E9A1",
        'pale': "#8B8B8B",
        'dark-blue': "#344054",
        'pale-red': "#EBB6BA",
        'pale-pink': "rgba(249, 232, 233, 0.70)",
        'input-placeholder': "#777980",

      },
      gridTemplateColumns: {
        "2-v2": "1fr 1.5fr",
        "2-v3": "28px 1fr",
        "2-v4": "428px 1.5fr",
        "2-v7": "290px 1.5fr",
        "2-v5": "466px 1fr",
        "2-v6": "14px 1fr",
        "3-v2": "306px 306px 306px",
        "3-v4": "250px 250px 250px",
        "3-v5": "180px 180px 180px",
        "3-v8": "400px 1fr",
      }
    },
  },
  plugins: [],
};
export default config;
