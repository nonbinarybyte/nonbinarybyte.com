/** @type {import('tailwindcss').Config} */
import path from 'path';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Includes all components & pages
  ],
  theme: {
    extend: {
      colors: {
        babypink: '#fbcfe8',
        babyblue: '#bfdbfe',
        babyyellow: '#fef9c3',
      },
      fontFamily: {
        vibes: ['"Great Vibes"', 'cursive'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        baloo: ['"Baloo 2"', 'cursive'],
      },
    },
  },
  plugins: [],
};
