/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        "fcc-theme": {
          primary: "#D9B504",

          secondary: "#2E2F30",

          accent: "#22c55e",

          neutral: "#ffffff",

          "base-100": "#ffffff",

          info: "#00bcd4",

          success: "#4ade80",

          warning: "#ff9800",

          error: "#ef5350",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
