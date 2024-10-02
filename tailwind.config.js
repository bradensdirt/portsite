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
      // Add custom durations if needed
      transitionDuration: {
        300: '300ms',
        500: '500ms',
      },
    },
  },
  plugins: [
  ],
};
