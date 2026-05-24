import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-archivo)", "sans-serif"],
        outfit:   ["var(--font-space-grotesk)", "sans-serif"],
        archivo:  ["var(--font-archivo)", "sans-serif"],
        grotesk:  ["var(--font-space-grotesk)", "sans-serif"],
        rajdhani: ["var(--font-space-grotesk)", "sans-serif"],
        mono:     ["var(--font-space-mono)", "monospace"],
      },
      colors: {
        feza: {
          bg:            "var(--bg)",
          surface:       "var(--surface)",
          card:          "var(--card)",
          "surface-2":   "var(--surface-2)",
          border:        "var(--border)",
          "border-md":   "var(--border-md)",
          text:          "var(--text)",
          secondary:     "var(--text-secondary)",
          muted:         "var(--text-muted)",
          "muted-xs":    "var(--text-xs)",
          faint:         "var(--text-faint)",
          // Accent — fixed brand colors
          indigo:        "#2563eb",
          "indigo-dim":  "#3b82f6",
          "indigo-light":"#818cf8",
          cyan:          "#06b6d4",
          emerald:       "#10b981",
          amber:         "#f59e0b",
        },
      },
      animation: {
        "fade-in-up":     "fadeInUp 0.65s ease-out forwards",
        "fade-in":        "fadeIn 0.5s ease-out forwards",
        "float-slow":     "floatSlow 7s ease-in-out infinite",
        "blink":          "blink 1.2s step-end infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
      },
      boxShadow: {
        "card":          "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover":    "0 10px 36px rgba(79,70,229,0.11), 0 2px 8px rgba(0,0,0,0.05)",
        "indigo-ring":   "0 0 0 3px rgba(99,102,241,0.12)",
        "indigo-lift":   "0 8px 32px rgba(79,70,229,0.15), 0 2px 8px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
