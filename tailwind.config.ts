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
      // screens definition moved to theme.extend
    },
    extend: {
      // Add screens definition here
      screens: {
        'md': '768px', // Ensure md breakpoint is defined (Tailwind default)
        '2xl': '1400px', // Keep the custom 2xl breakpoint
      },
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
        "slide-in-from-top": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-out-to-top": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out-to-right": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        "slide-in-from-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out-to-left": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-out-to-bottom": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        // Add marquee animation
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // Add sheet animations matching sheet.tsx durations
        "slide-in-from-top": "slide-in-from-top 0.5s ease-in-out",
        "slide-out-to-top": "slide-out-to-top 0.3s ease-in-out",
        "slide-in-from-right": "slide-in-from-right 0.5s ease-in-out",
        "slide-out-to-right": "slide-out-to-right 0.3s ease-in-out",
        "slide-in-from-left": "slide-in-from-left 0.5s ease-in-out",
        "slide-out-to-left": "slide-out-to-left 0.3s ease-in-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.5s ease-in-out",
        "slide-out-to-bottom": "slide-out-to-bottom 0.3s ease-in-out",
        // Add marquee animation (adjust duration as needed)
        marquee: 'marquee 40s linear infinite',
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
