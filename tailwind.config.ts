import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Use 'class' strategy
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Include if using pages directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Include if using separate components dir outside src
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Include if using app directory outside src
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Main content path for src directory
  ],
  prefix: '', // Optional prefix for Tailwind classes
  theme: {
    container: {
      center: true,
      padding: '1rem', // Reduced padding for potentially better visual balance
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          // Map our generated CSS variables
          DEFAULT: 'hsl(var(--color-primary))',
          foreground: 'hsl(var(--color-primary-text))', // Text color for primary background
          lightest: 'hsl(var(--color-primary-lightest))',
          light: 'hsl(var(--color-primary-light))',
          dark: 'hsl(var(--color-primary-dark))',
          darkest: 'hsl(var(--color-primary-darkest))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Add mappings for other palettes (secondary, accent, gray) if defined in theme.ts
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
      fontFamily: {
        sans: ['var(--font-geist-sans)'], // Map the font variable from layout.tsx
        mono: ['var(--font-geist-mono)'], // Map the font variable from layout.tsx
      },
    },
  },
  plugins: [require('tailwindcss-animate')], // shadcn/ui uses this
};

export default config;
