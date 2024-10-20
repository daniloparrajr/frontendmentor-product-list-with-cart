/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
      "50": "4px",
      "100": "8px",
      "150": "12px",
      "200": "16px",
      "300": "24px",
      "400": "32px",
      "500": "40px",
      "1100": "88px",
      "9000": "76rem",
    },
  },
  extend: {
    fontFamily: {
      sans: ['var(--font-red-hat-text)'],
    },
  },
  plugins: [],
};
