import {
  colors,
  fontFamily,
  fontSize,
  spacing,
  borderRadius,
  boxShadow,
} from './src/styles/tokens/index.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
      spacing,
      borderRadius,
      boxShadow,
      ringColor: {
        accent: colors.accent.DEFAULT,
      },
    },
  },
  plugins: [],
};
