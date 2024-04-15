/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '360': '360deg', // Ensure this is enabled if not already available
      }
    },
  },
  plugins: [require("daisyui")],

}

