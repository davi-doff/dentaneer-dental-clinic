/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['"Noto Sans Thai"', 'sans-serif'] },
      colors: {
        'pastel-green': { 50: '#F0FBF4', 100: '#E0F5E9', 200: '#C5EBD5', 300: '#9ADDC0', 400: '#6CC8A9', 500: '#47B290', 600: '#339A79', 700: '#277961', 800: '#216250', 900: '#1D5344', 950: '#0F2D25' },
      }
    }
  },
  plugins: [],
}
