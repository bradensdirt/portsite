module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Include all component HTML and TypeScript files
  ],
  theme: {
    extend: {
      scale: {
        '2.5': '2.5',
      },
      zIndex: {
        1: '1',
      },
      transitionDuration: {
        300: '300ms',
        500: '500ms',
      },
      colors: {  // Color should be plural
        'custom-dark': '#0D1518',
      },
      spacing: {  // Use 'spacing' instead of 'margin'
        'menu': '5.125rem',
      },
    },
  },
  plugins: [],
};
