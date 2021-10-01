module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        consolas: ['Consolas'],
        rubik: ['Rubik', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
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
        transparent: {
          100: '#ffffff10',
          200: '#ffffff20',
          300: '#ffffff30',
          400: '#ffffff40',
          500: '#ffffff50',
          600: '#ffffff60',
          700: '#ffffff70',
          800: '#ffffff80',
          900: '#ffffff90',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
