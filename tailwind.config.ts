import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#09090b',
        primary_hover: '#18181b',
        secundary: '#27272a',
        secundary_hover: '#3f3f46',
        highlights: '#5b21b6',
        highlights_hover: '#6d28d9',
        light: '#fafafa',
        lightSilver: '#d4d4d8',
        border: '#1A1A1A',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-out-to-top': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-out-to-bottom': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'slide-in-from-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-to-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-in-from-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-to-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-out': 'fade-out 0.5s ease-out forwards',
        'slide-in-from-top': 'slide-in-from-top 0.5s ease-out forwards',
        'slide-out-to-top': 'slide-out-to-top 0.5s ease-out forwards',
        'slide-in-from-bottom': 'slide-in-from-bottom 0.5s ease-out forwards',
        'slide-out-to-bottom': 'slide-out-to-bottom 0.5s ease-out forwards',
        'slide-in-from-left': 'slide-in-from-left 0.5s ease-out forwards',
        'slide-out-to-left': 'slide-out-to-left 0.5s ease-out forwards',
        'slide-in-from-right': 'slide-in-from-right 0.5s ease-out forwards',
        'slide-out-to-right': 'slide-out-to-right 0.5s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

export default config
