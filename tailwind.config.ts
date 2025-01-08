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
        'smooth-fadein': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'smooth-fadeout': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
        'accordion-down': {
          '0%': { maxHeight: '0', opacity: '0' },
          '100%': { maxHeight: '500px', opacity: '1' },
        },
        'accordion-up': {
          '0%': { maxHeight: '500px', opacity: '1' },
          '100%': { maxHeight: '0', opacity: '0' },
        },
      },
      animation: {
        // smooth
        'smooth-fadein': 'smooth-fadein 0.15s cubic-bezier(.4, 0, .2, 1)',
        'smooth-fadeout': 'smooth-fadeout 0.15s cubic-bezier(.4, 0, .2, 1)',

        // specific components
        'accordion-down': 'accordion-down 0.4s ease-in',
        'accordion-up': 'accordion-up 0.4s ease-out',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

export default config
