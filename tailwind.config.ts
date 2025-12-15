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
        "app-bg": "#F6F7F8", // Main app background
        "card-bg": "#FFFFFF", // Card background

        // Chart Colors
        chart: {
          pink: "#E91E8C", // Systolic line
          purple: "#8C6FE6", // Diastolic line
          grid: "#F0F0F0", // Grid lines
        },

        // Health Metric Cards
        health: {
          respiratory: {
            light: "#E0F3FA", // Card background
            DEFAULT: "#3B82F6", // Icon color
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
          normal: "#10B981", // Green
          higher: "#EF4444", // Red
          lower: "#3B82F6", // Blue
          warning: "#F59E0B", // Orange
        },

        // UI Elements
        ui: {
          primary: "#01F0FF", // Primary action
          secondary: "#072635", // Secondary text
          border: "#E5E7EB", // Borders
          hover: "#F3F4F6", // Hover state
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
