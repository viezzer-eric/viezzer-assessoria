/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'premium-black': '#121212',
        'premium-gold': '#C5A059',
        'premium-sand': '#F5F5F4',
      }
    },
  },
  plugins: [],
}