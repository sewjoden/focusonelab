/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#18181B',
        'surface-hover': '#27272A',
        'surface-glass': 'rgba(24, 24, 27, 0.7)',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A1A1AA',
        'text-accent': '#FF4500',
        'brand-primary': '#FF4500',
        'brand-primary-hover': '#FF5722',
        'brand-secondary': '#1E90FF',
        'brand-tertiary': '#00FF7F',
        border: '#27272A',
        'border-active': '#FF4500',
        'border-subtle': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
