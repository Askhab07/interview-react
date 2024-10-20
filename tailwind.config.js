/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        'gradient': {
          '0%': { 'background-position': '0% center' },
          '100%': { 'background-position': '100% center' },
        },
      },
    },
  },
  plugins: [],
}

