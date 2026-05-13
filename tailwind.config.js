/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFAF5',
          100: '#FAF6F0',
          200: '#F3EBE0',
          300: '#E8D9C8',
        },
        sage: {
          100: '#D4E6D5',
          200: '#B8D4BA',
          300: '#9BC09E',
          400: '#7A9E7E',
          500: '#5E8562',
          600: '#4A6B4D',
          700: '#375239',
        },
        terra: {
          100: '#F2D9CE',
          200: '#E5B8A8',
          300: '#D49080',
          400: '#C4704F',
          500: '#A85A3E',
          600: '#8B4530',
        },
        rose: {
          soft: '#D4A0A0',
          light: '#F0DADA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
