/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {backgroundImage: {
      'clouds': "url('../img/clouds.jpg')",
    },
    backgroundColor: {
      'transparent': 'rgba(255, 255, 255, 0.3)',
      'hover': '#f6d7eee8',
    },
    borderRadius: {
      '5xl': '2.25rem',
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    transitionProperty: {
      'bg': 'background-color',
    },
    transitionDuration: {
      '300': '300ms',
    },
    height: {
      '500': '500px',
    },
    width: {
      '500': '500px',
    },
  },
},
  plugins: [],
}

