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
        // Three faces, three jobs.
        sans:    ["var(--font-manrope)", "system-ui", "sans-serif"], // body + UI
        display: ["var(--font-display)", "system-ui", "sans-serif"],    // headlines
        mono:    ["var(--font-mono-feza)", "ui-monospace", "monospace"], // data

        // Legacy aliases kept so the detail pages keep rendering while they
        // migrate. orbitron → display, outfit → body.
        orbitron: ["var(--font-display)", "system-ui", "sans-serif"],
        outfit:   ["var(--font-manrope)", "system-ui", "sans-serif"],
        archivo:  ["var(--font-display)", "system-ui", "sans-serif"],
        grotesk:  ["var(--font-manrope)", "system-ui", "sans-serif"],
        rajdhani: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      colors: {
        feza: {
          bg:          "var(--bg)",
          surface:     "var(--surface)",
          card:        "var(--card)",
          "surface-2": "var(--card-2)",
          "card-2":    "var(--card-2)",
          border:      "var(--border)",
          "border-md": "var(--border-strong)",

          text:       "var(--ink)",
          secondary:  "var(--ink-2)",
          muted:      "var(--ink-3)",
          "muted-xs": "var(--ink-3)",
          faint:      "var(--ink-4)",

          // Accents resolve per theme — never hardcode these in components.
          accent:          "var(--accent)",
          "accent-strong": "var(--accent-strong)",
          "accent-ink":    "var(--accent-ink)",
          signal:          "var(--signal)",
          ok:              "var(--ok)",

          // Legacy accent names
          indigo:         "var(--accent)",
          "indigo-dim":   "var(--accent-strong)",
          "indigo-light": "var(--accent)",
          cyan:           "var(--accent)",
          emerald:        "var(--ok)",
          amber:          "var(--signal)",
        },
      },
      borderRadius: {
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        lift: "var(--shadow-lift)",
      },
      transitionTimingFunction: {
        feza: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
