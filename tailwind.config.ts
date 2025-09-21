// Tailwind Theme - Eagle Clarity
import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Custom Colors
      colors: {
        primary: "hsl(0, 0%, 100%)",   // Base White
        secondary: "hsl(0, 0%, 95%)", // Soft Gray
        accent: "hsl(145, 63%, 42%)", // Emerald Growth
        dark: "hsl(0, 0%, 12%)",      // Charcoal Black
        gold: "hsl(43, 85%, 55%)",    // Gold Clarity
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
        soft: "0 4px 20px rgba(0, 0, 0, 0.1)",
        strong: "0 8px 30px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
  },
} satisfies Config;


