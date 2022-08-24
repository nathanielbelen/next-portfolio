/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blackish: '#202023',
        grayish: '#e3e5e5',
      },
    },
    fontFamily: {
      nunito: ['Nunito Sans'],
      roboto: ['Roboto'],
      inter: ['Inter'],
    },
  },
  plugins: [],
};
