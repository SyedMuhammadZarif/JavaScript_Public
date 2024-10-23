// tailwind.config.js
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-1000%)', opacity: '0' }, // Start off-screen to the left
          '100%': { transform: 'translateX(0)', opacity: '1' },   // End at its position
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 2s forwards',
      },
    },
  },
  plugins: [],
};
