import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        outfit:   ["var(--font-outfit)",   "sans-serif"],
        // backward-compat alias so any remaining font-rajdhani refs still work
        rajdhani: ["var(--font-outfit)",   "sans-serif"],
        mono:     ["var(--font-space-mono)", "monospace"],
      },
      colors: {
        feza: {
          bg:            "#f8fafc",
          surface:       "#ffffff",
          card:          "#ffffff",
          border:        "#e2e8f0",
          "border-md":   "#cbd5e1",
          indigo:        "#4f46e5",
          "indigo-dim":  "#6366f1",
          "indigo-light":"#818cf8",
          text:          "#0f172a",
          secondary:     "#475569",
          muted:         "#94a3b8",
          "muted-xs":    "#64748b",
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
