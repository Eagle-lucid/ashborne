// Tailwind Theme - Eagle Clarity
import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom Colors
      colors: {
        brand: {
          primary: "var(--brand-primary)",   // White
          secondary: "var(--brand-secondary)", // Soft Gray
          accent: "var(--brand-accent)", // Emerald Growth
          'accent-dark': "var(--brand-accent-dark)", // Emerald Growth Dark
          dark: "var(--brand-dark)",      // Charcoal Black
          gold: "var(--brand-gold)",    // Gold Clarity
        },
      },

      // Fonts
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Playfair Display", "serif"],
        mono: ["Fira Code", "monospace"],
      },

      // Animations
      animation: {
        "fade-in": "fadeIn 1s ease-in-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },

      // Shadows & Radius
      boxShadow: {
        soft: "var(--shadow-soft)",
        strong: "var(--shadow-strong)",
        inset: "var(--shadow-inset)",
        glow: "var(--shadow-glow)",
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
      },

      // Background Gradients
      backgroundImage: {
        "gradient-ashborne":
          "linear-gradient(135deg, hsl(145, 63%, 42%) 0%, hsl(43, 85%, 55%) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
