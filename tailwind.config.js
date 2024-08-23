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
