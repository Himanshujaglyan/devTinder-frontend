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
      },
      animation: {
        "interested-out": "interestedOut 0.8s ease-out forwards",
        "interested-in": "interestedIn 0.6s ease-in forwards",
        "ignored-out": "ignoredOut 0.8s ease-out forwards",
        "ignored-in": "ignoredIn 0.6s ease-in forwards",
      },
      keyframes: {
        interestedOut: {
          "0%": {
            transform: "scale(1) rotateY(0deg)",
            opacity: "1",
            border: "2px solid #00ff95",
            boxShadow: "0 0 10px #00ff95",
          },
          "50%": {
            transform: "scale(1.1) rotateY(20deg)",
            boxShadow: "0 0 20px #00ff95",
          },
          "100%": {
            transform: "scale(0) rotateY(180deg)",
            opacity: "0",
            boxShadow: "0 0 40px #00ff95",
          },
        },
        interestedIn: {
          "0%": {
            transform: "scale(0) rotateY(180deg)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1) rotateY(360deg)",
            opacity: "1",
          },
        },
        ignoredOut: {
          "0%": {
            transform: "scale(1) rotateY(0deg)",
            opacity: "1",
            border: "2px solid #ff4c4c",
            boxShadow: "0 0 10px #ff4c4c",
          },
          "50%": {
            transform: "scale(1.1) rotateY(-20deg)",
            boxShadow: "0 0 20px #ff4c4c",
          },
          "100%": {
            transform: "scale(0) rotateY(-180deg)",
            opacity: "0",
            boxShadow: "0 0 40px #ff4c4c",
          },
        },
        ignoredIn: {
          "0%": {
            transform: "scale(0) rotateY(-180deg)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1) rotateY(-360deg)",
            opacity: "1",
          },
        },
      },
    }
  },
  plugins: [require('daisyui')],
}

