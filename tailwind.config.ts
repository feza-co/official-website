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
        rajdhani: ["var(--font-rajdhani)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      colors: {
        feza: {
          bg: "#050c17",
          surface: "#0a1525",
          card: "#080f1e",
          border: "#192840",
          cyan: "#00c8ff",
          "cyan-dim": "#0090b8",
          "cyan-muted": "rgba(0,200,255,0.12)",
          text: "#dae4f0",
          muted: "#445a6f",
          "muted-2": "#2a3d52",
        },
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "scan-line": "scanLine 6s linear infinite",
        "blink": "blink 1.2s step-end infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": {
            textShadow: "0 0 15px rgba(0,200,255,0.3), 0 0 30px rgba(0,200,255,0.1)",
          },
          "50%": {
            textShadow:
              "0 0 30px rgba(0,200,255,0.6), 0 0 60px rgba(0,200,255,0.25), 0 0 100px rgba(0,200,255,0.1)",
          },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(200vh)", opacity: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        "cyan-sm": "0 0 12px rgba(0,200,255,0.18)",
        "cyan-md": "0 0 25px rgba(0,200,255,0.25)",
        "cyan-lg": "0 0 50px rgba(0,200,255,0.3), 0 0 100px rgba(0,200,255,0.1)",
        "card": "0 4px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)",
        "card-hover":
          "0 8px 50px rgba(0,0,0,0.6), 0 0 25px rgba(0,200,255,0.1), inset 0 1px 0 rgba(0,200,255,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
