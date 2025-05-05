/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif']
      },
      colors: {
        blue: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd6ff',
          300: '#8ebcff',
          400: '#5894ff',
          500: '#3366ff',
          600: '#1e40af', // Primary color
          700: '#1c3faa',
          800: '#18327d',
          900: '#172554',
        },
        orange: {
          400: '#fb923c',
          500: '#f97316', // Accent color
          600: '#ea580c',
        }
      }
    },
  },
  plugins: [],
};