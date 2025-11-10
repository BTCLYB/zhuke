/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // optional custom color tokens if needed
      },
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.25)',
      }
    },
  },
  plugins: [],
}
