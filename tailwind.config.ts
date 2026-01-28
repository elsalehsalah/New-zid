import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B21B6',
        secondary: '#8B5CF6',
        accent: {
          '1': '#AE72FF',
          '2': '#4C1289',
          '3': '#EC4899',
        },
        success: '#00B8A9',
        background: '#09001A',
        foreground: '#FFFFFF',
        muted: {
          DEFAULT: '#1A1A1A',
          foreground: '#666666',
        },
        border: '#1A1A1A',
        light: {
          bg: '#eeeeee',
          nav: '#f0f0f0',
          heading: '#3c1c54',
          body: '#777d88',
          purple: '#ae72ff',
          'gradient-start': '#7BAFFD',
          'gradient-mid': '#AF72FE',
          'gradient-end': '#5F2B86',
        },
      },
      fontFamily: {
        sans: ['var(--font-codec-pro)', 'system-ui', 'sans-serif'],
        body: ['var(--font-suisse)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-codec-pro)', 'system-ui', 'sans-serif'],
        mono: ['monospace'],
      },
      maxWidth: {
        content: '1400px',
      },
      maskImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;

