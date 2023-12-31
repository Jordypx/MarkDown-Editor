/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'fade': 'fadeInOut 2s ease-in-out forwards'
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': {opacity: 0},
          '25%': {opacity: 1},
          '75%': {opacity: 1},
        }
      }
    },
    colors: {
      "custom-dark-400": "#151619",
      "custom-dark-300": "#1D1F22",
      "custom-dark-200": "#2B2D31",
      "custom-dark-100": "#35393F",
      "custom-grey-400": "#5A6069",
      "custom-grey-300": "#7C8187",
      "custom-grey-200": "#C1C4CB",
      "custom-grey-100": "#E4E4E4",
      "custom-orange-400": "#E46643",
      "custom-orange-300": "#F39765",
      "custom-white-200": "#F5F5F5",
      "custom-white-100": "#FFFFFF",
    },
    fontSize: {
      "custom-text-body": "13px",
      "custom-text-heading-sm": "14px",
      "custom-text-heading-md": "15px",
      "custom-text-heading-dialog": "20px",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      "roboto-mono": ['"Roboto Mono"', "monospace"],
      "roboto-slab": ['"Roboto Slab"', "serif"],
    },
    screens: {
      "2xl": { max: "1536px" },

      "xl": { max: "1280px" },

      "lg": { max: "1024px" },

      "md": { max: "768px" },

      "sm": { max: "640px" },
    },
  },
  plugins: [],
};
