module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        consolas: ['Consolas'],
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        primary: '#339989',
        secondary: 'rgba(83, 121, 156, 1)',
        dark: {
          100: '#131515',
          200: '#2b2c28',
        },
        light: {
          100: '#fffafb',
          200: '#a0a0a0',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
