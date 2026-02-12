import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        bone: "#f4f1eb",
        dune: "#d2c2ac",
        petrol: "#183741",
        burgundy: "#5c1f2d",
        forest: "#1f3a32",
        slate: "#4e4e4a",
        ink: "#0b0c10",
        sand: "#e9dfcf",
        "muted-ink": "#23262b",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        elevation: "0 35px 80px rgba(15, 23, 42, 0.25)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
