/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        // Pulsate for I and P
        pulsateIP: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(3)' },
        },
        
        // The animations you already have
        moveIAndSabell: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-170px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInFromBehindP: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        // Use the same name ("pulsateIP") for the animation
        pulsateIP: 'pulsateIP 1.8s ease-in-out 1 forwards',

        // The animations you already have
        moveIAndSabell: 'moveIAndSabell 1s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        fadeInFromBehindP: 'fadeInFromBehindP 0.5s ease-in forwards',
      },
    },
  },
  plugins: [],
};
