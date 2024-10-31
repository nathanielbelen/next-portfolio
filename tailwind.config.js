/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './posts/components/**/*.{js,ts,jsx,tsx}',
    './posts/*.mdx'
  ],
  theme: {
    extend: {
      colors: {
        blackish: '#202023',
        grayish: '#e3e5e5',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { scale: '1.8 0.7'},
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
    fontFamily: {
      nunito: ['Nunito Sans'],
      roboto: ['Roboto'],
      inter: ['Inter'],
      code: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
    },
  },
  plugins: [],
};
