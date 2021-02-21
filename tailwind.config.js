const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#1D1D1D',
      blue: {
        100: '#F7F8FA',
        200: '#258AFF',
        300: '#136CD5',
        400: '#263652',
        500: '#001234',
        DEFAULT: '#258AFF',
      },
      gray: {
        100: '#8A96A8',
        200: '#8C97AC',
        300: '#ACB6C3',
        400: '#7C8087',
        500: '#576375',
        DEFAULT: '#8A96A8',
      },
    },
    boxShadow: {
      hover: '0px 6px 16px rgba(0, 76, 132, 0.1), 0px 6px 18px rgba(0, 90, 226, 0.1)',
      btn: '0px 4px 8px rgba(0, 45, 178, 0.4)'
    },
  },
  variants: {
    extend: { // по воможности удалить все лишнее из конфига
      padding: ['first', 'last', 'hover'],
      margin: ['first', 'last', 'hover'],
      borderWidth: ['first', 'last', 'hover'],
      backgroundColor: ['active'],
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/custom-forms'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '800px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        }
      })
    },
    plugin(({ addBase }) => {
      addBase({
        p: {
          'font-size': '20px',
          'line-height': '34px',
          'margin-bottom': '7px',
        },
        h1: {
          'font-size': '70px',
          'font-weight': 700,
          'line-height': '70px',
        },
        h2: {
          'font-size': '64px',
          'font-weight': 700,
          'line-height': '72px',
        },
        h3: {
          'font-size': '20px',
          'font-weight': 700,
          'line-height': '28px',
        },
        h4: {
          'font-size': '18px',
          'font-weight': 600,
          'line-height': '26px',
        },
        h5: {
          'font-size': '16px',
          'font-weight': 600,
          'line-height': '24px',
        },
        h6: {
          'font-size': '14px',
          'font-weight': 600,
          'line-height': '20px',
        },
        ul: {
          'font-size': '14px',
          'line-height': '20px',
          'list-style': 'none',
        },
        ol: {
          'font-size': '14px',
          'line-height': '20px',
          'list-style': 'none',
        },
      });
    }),
  ],
}