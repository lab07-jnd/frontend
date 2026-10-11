import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./services/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Marca e Navegação */
        sidebar: {
          DEFAULT: "#0E3B52",
          hover: "#164E6C",
        },
        brand: {
          primary: "#0066FF",
          "primary-hover": "#0052CC",
          "primary-light": "#E6F0FF",
        },
        /* Neutros e Superfícies */
        bg: {
          app: "#F4F6F8",
        },
        surface: {
          card: "#FFFFFF",
        },
        border: {
          subtle: "#E2E8F0",
        },
        text: {
          primary: "#0F172A",
          secondary: "#64748B",
        },
        /* Semânticos (Feedbacks / Badges) */
        success: {
          bg: "#D1FAE5",
          text: "#065F46",
        },
        warning: {
          bg: "#FEF3C7",
          text: "#92400E",
        },
        danger: {
          bg: "#FEE2E2",
          text: "#991B1B",
        },
        info: {
          bg: "#DBEAFE",
          text: "#1E40AF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(15, 23, 42, 0.05)",
        dropdown: "0 4px 6px -1px rgba(15, 23, 42, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
