/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e10600',
        },
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        pulseSlow: 'pulseSlow 2s ease-in-out infinite',
        typewriter: 'typewriter 2.5s steps(40, end)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
