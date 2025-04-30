/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'white-sm': '0 1px 1px rgba(255, 255, 255, 0.2)',
      }
    }
  },
  plugins: [require('daisyui')],
}

