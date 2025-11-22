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
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        primary: "var(--primary)",
        "muted-foreground": "var(--muted-foreground)",
      },
      boxShadow: {
        soft: "0 20px 45px rgba(20, 20, 45, 0.08)",
        primary: "0 20px 45px rgba(93, 61, 253, 0.16)",
        "primary-strong": "0 32px 60px rgba(93, 61, 253, 0.24)",
        "inner-soft": "inset 0 1px 0 rgba(255, 255, 255, 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
