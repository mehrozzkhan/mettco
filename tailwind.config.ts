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
        // Industrial Ember design system
        ink: {
          DEFAULT: "#0B0E14",
          900: "#0B0E14",
          800: "#11151F",
          700: "#171C28",
        },
        navy: {
          DEFAULT: "#0F172A",
          light: "#1E293B",
        },
        steel: {
          DEFAULT: "#334155",
          light: "#64748B",
          lighter: "#94A3B8",
        },
        ember: {
          DEFAULT: "#EA5A17",
          light: "#F97316",
          dark: "#C2410C",
          soft: "#FDBA74",
        },
        paper: {
          DEFAULT: "#F6F5F2",
          warm: "#EFEDE7",
          card: "#FFFFFF",
        },
        line: {
          DEFAULT: "#E3E1DA",
          dark: "#232936",
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
