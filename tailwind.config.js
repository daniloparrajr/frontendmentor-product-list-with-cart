/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "black": "#000000",
      "white": "#FFFFFF",
      "red": "#C73B0F",
      "green": "#1EA575",
      "rose-50": "#FCF8F6",
      "rose-100": "#F5EEEC",
      "rose-300": "#CAAFA7",
      "rose-400": "#AD8A85",
      "rose-500": "#87635A",
      "rose-900": "#260F08",
    },
    fontSize: {
      sm: ["0.875rem", "1.5"],
      base: ["1rem", "1.5"],
      lg: ["1.5rem", "1.25"],
      xl: ["2.5rem", "1.20"],
    },
    spacing: {
      "50": "0.25rem",
      "100": "0.5rem",
      "150": "0.75rem",
      "200": "1rem",
      "300": "1.5rem",
      "400": "2rem",
      "500": "2.5rem",
      "1100": "5.5rem",
    }
  },
  extend: {
    fontFamily: {
      sans: ['var(--font-red-hat-text)'],
    },
  },
  plugins: [],
};
