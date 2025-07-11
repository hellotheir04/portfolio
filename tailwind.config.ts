import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "gray-purple": {
          "100": "#f8fafc",
          "200": "#f1f5f9",
          "300": "#e2e8f0",
          "400": "#cbd5e1",
          "500": "#94a3b8",
          "600": "#64748b",
          "700": "#475569",
          "800": "#334155",
          "900": "#1e293b",
        },
        "light-purple": {
          "100": "#faf5ff",
          "200": "#f3e8ff",
          "300": "#e9d5ff",
          "400": "#d8b4fe",
          "500": "#c084fc",
          "600": "#a855f7",
          "700": "#9333ea",
          "800": "#7c3aed",
          "900": "#6b21a8",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-gray-purple": "linear-gradient(135deg, #9ca3af, #c4b5fd)",
        "gradient-gray-purple-light": "linear-gradient(135deg, #d1d5db, #ddd6fe)",
        "gradient-gray-purple-subtle": "linear-gradient(135deg, #f3f4f6, #faf5ff)",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
