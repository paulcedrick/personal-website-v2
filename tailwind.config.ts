import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds - Deep, layered blacks
        "bg-primary": "#09090B",
        "bg-elevated": "#0F0F12",
        "bg-surface": "#18181B",

        // Text hierarchy
        "text-primary": "#FAFAFA",
        "text-secondary": "#A1A1AA",
        "text-muted": "#52525B",

        // Accent - Champagne Gold
        accent: {
          DEFAULT: "#C9A962",
          hover: "#D4B87A",
          subtle: "rgba(201, 169, 98, 0.15)",
        },

        // Borders
        "border-subtle": "#27272A",
        "border-hover": "#3F3F46",
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "heading-1": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "heading-2": ["1.5rem", { lineHeight: "1.3" }],
        "heading-3": ["1.125rem", { lineHeight: "1.4" }],
      },
      letterSpacing: {
        "extra-wide": "0.1em",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { width: "0", opacity: "0" },
          "100%": { width: "2px", opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transform: ["hover", "focus"],
      backgroundImage: {
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  corePlugins: {
    transitionProperty: true,
  },
};
export default config;
