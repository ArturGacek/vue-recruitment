import type { Config } from 'tailwindcss';
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: 'var(--primary)',
      white: 'var(--white)',
      'text-focus': 'var(--text-focus)',
      secondary: 'var(--secondary)',
      background: 'var(--background)',
      'background-secondary': 'var(--background-secondary)',
      'border-color': 'var(--border-color)',
      'border-black': 'var(--border-black)',
      'border-light-gray': 'var(--border-light-gray)',
      error: 'var(--error)',
      'error-light': 'var(--error-light)',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      maxWidth: {
        1240: '1240px',
      },
      fontSize: {
        10: '10px',
        12: '12px',
        16: '16px',
        20: '20px',
        22: '22px',
        32: '32px',
        38: '38px',
        42: '42px',
        48: '48px',
        52: '52px',
      },
      borderRadius: {
        10: '10px',
        20: '20px',
        50: '50%',
      },
      lineHeight: {
        55: '55px',
      },
    },
  },
  plugins: [],
} satisfies Config;
