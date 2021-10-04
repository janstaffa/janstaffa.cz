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
          300: '#cccccc',
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
        transparentDark: {
          100: '#00000010',
          200: '#00000020',
          300: '#00000030',
          400: '#00000040',
          500: '#00000050',
          600: '#00000060',
          700: '#00000070',
          800: '#00000080',
          900: '#00000090',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
