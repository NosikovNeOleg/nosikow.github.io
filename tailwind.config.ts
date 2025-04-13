import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: {
          DEFAULT: "var(--main)",
          foreground: "var(--main-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary-background)",
        },
      },
      boxShadow: {
        shadow: "var(--shadow)",
      },
      borderRadius: {
        base: "var(--radius-base)",
      },
    },
  },
  plugins: [],
}

export default config 