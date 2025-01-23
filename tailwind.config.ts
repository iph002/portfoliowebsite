import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        pulsateIP: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(3)' },
        },
        moveIAndSabell: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-170px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInFromBehindP: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        pulsateIP: 'pulsateIP 1.8s ease-in-out 1 forwards',
        moveIAndSabell: 'moveIAndSabell 1s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        fadeInFromBehindP: 'fadeInFromBehindP 0.5s ease-in forwards',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

export default config;
