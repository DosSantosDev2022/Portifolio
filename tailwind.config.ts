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
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-hover': 'var(--secondary-hover)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-hover': 'var(--muted-hover)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'accent-foreground': 'var(--accent-foreground)',

        danger: 'var(--danger)',
        'danger-hover': 'var(--danger-hover)',
        'danger-foreground': 'var(--danger-foreground)',
        warning: 'var(--warning)',
        'warning-hover': 'var(--warning-hover)',
        'warning-foreground': 'var(--warning-foreground)',
        success: 'var(--success)',
        'success-hover': 'var(--success-hover)',
        'success-foreground': 'var(--success-foreground)',

        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',

        'chart-1': 'var(--chart-1)',
        'chart-2': 'var(--chart-2)',
        'chart-3': 'var(--chart-3)',
        'chart-4': 'var(--chart-4)',
        'chart-5': 'var(--chart-5)',
      },
      backgroundImage: {
        'gradient-color':
          'linear-gradient(180deg, #09090b 0%,  #27272a 50%,  #18181b 100%)',
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
