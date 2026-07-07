import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        // METTCO "Graphite & Signal" system — machined steel + hi-vis orange
        ink: {
          DEFAULT: "#0B0E12", // base
          900: "#0B0E12",
          800: "#12161C", // surface 1
          700: "#1A2027", // surface 2
        },
        // Heading text (legacy name kept: h1-h5 + cards use text-navy)
        navy: {
          DEFAULT: "#F3F5F7",
          light: "#C6CFD8",
        },
        // Body / muted text scale
        steel: {
          DEFAULT: "#9BA6B2",
          light: "#8A95A1",
          lighter: "#9BA6B2",
          muted: "#5C6672",
        },
        // PRIMARY accent — hi-vis signal orange (legacy name kept site-wide)
        azure: {
          DEFAULT: "#FF5A1F",
          light: "#FF7A45",
          dark: "#E24A12",
          soft: "#FFB08F",
        },
        signal: {
          DEFAULT: "#FF5A1F",
          hover: "#E24A12",
        },
        // Secondary — blueprint cyan, for data/spec chips/links only
        blueprint: {
          DEFAULT: "#4FA8C4",
          dim: "#3A7D93",
        },
        // Light text on dark (legacy: text-paper everywhere)
        paper: {
          DEFAULT: "#F3F5F7",
          warm: "#E7EBEF",
          card: "#FFFFFF",
        },
        line: {
          DEFAULT: "#2A323C",
          dark: "#232A33",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.08em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        elevated:
          "0 1px 2px rgba(11,14,20,0.04), 0 12px 32px -12px rgba(11,14,20,0.18)",
        deep: "0 30px 80px -32px rgba(11,14,20,0.45)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
