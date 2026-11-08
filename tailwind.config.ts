import type { Config } from "tailwindcss";

const c = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: c("primary"),
        secondary: c("secondary"),
        bg: c("bg"),
        accent: c("accent"),
        gold: c("gold"),
        ink: c("text"),
        card: c("card"),
      },
      fontFamily: {
        display: ["var(--font-display)"],
        script: ["var(--font-script)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgb(var(--c-primary) / 0.55)",
        glow: "0 0 40px 6px rgb(var(--c-gold) / 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
