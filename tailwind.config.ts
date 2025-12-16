/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background Colors
        "app-bg": "#F6F7F8",
        "card-bg": "#FFFFFF",

        // Chart Colors
        chart: {
          pink: "#E91E8C",
          purple: "#8C6FE6",
          grid: "#F0F0F0",
        },

        // Health Metric Cards
        health: {
          respiratory: {
            light: "#E0F3FA",
            DEFAULT: "#3B82F6",
          },
          temperature: {
            light: "#FFE6E6",
            DEFAULT: "#EF4444",
          },
          heart: {
            light: "#FFE6F1",
            DEFAULT: "#EC4899",
          },
        },

        // Status Colors
        status: {
          normal: "#10B981",
          higher: "#EF4444",
          lower: "#3B82F6",
          warning: "#F59E0B",
        },

        ui: {
          primary: "#01F0FF",
          secondary: "#072635",
          border: "#E5E7EB",
          hover: "#F3F4F6",
        },
      },

      // Custom shadows
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        "card-hover": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      },

      // Custom border radius
      borderRadius: {
        card: "16px",
        button: "24px",
      },
    },
  },
  plugins: [],
};
