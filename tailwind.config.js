/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        tilt: { '0%,100%': { transform: 'rotate(-2deg)' }, '50%': { transform: 'rotate(2deg)' } },
      },
      animation: {
        tilt: 'tilt 6s infinite ease-in-out',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
