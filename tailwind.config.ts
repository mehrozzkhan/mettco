import type { Config } from "tailwindcss";

// "Graphite & Signal" — near-black graphite base, warm off-white text,
// one safety-orange signal accent reserved for CTAs, active states and
// the preloader mark. No gradients as decoration.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        graphite: {
          DEFAULT: "#111417", // page background
          800: "#171C20", // surface, one step lighter
          700: "#1E242A", // raised surface
        },
        line: "#2A3138", // hairline rules
        paper: {
          DEFAULT: "#EDEDE8", // warm off-white text
          dim: "#A8ADA9", // muted text — AA on graphite
        },
        signal: {
          DEFAULT: "#FF5A1F", // the one accent
          hover: "#E24A12",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      // Strict type scale. Headlines carry the personality; body stays quiet.
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.1em" }],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
