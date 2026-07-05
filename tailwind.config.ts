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
        // METTCO brand system — deep navy + cerulean (from brand logo)
        ink: {
          DEFAULT: "#060709",
          900: "#060709",
          800: "#0C0E12",
          700: "#13161C",
        },
        navy: {
          DEFAULT: "#0A2440",
          light: "#123256",
        },
        steel: {
          DEFAULT: "#33475C",
          light: "#5D7288",
          lighter: "#8FA3B8",
        },
        azure: {
          DEFAULT: "#0080B8",
          light: "#22A8DE",
          dark: "#00618D",
          soft: "#7DD0F0",
        },
        paper: {
          DEFAULT: "#F5F7FA",
          warm: "#EBEFF4",
          card: "#FFFFFF",
        },
        line: {
          DEFAULT: "#DCE3EB",
          dark: "#1E2229",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
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
