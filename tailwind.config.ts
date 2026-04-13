import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // STS2-inspired dark theme palette
        surface: {
          DEFAULT: '#1a1208',
          100: '#2a1e0f',
          200: '#3a2e1f',
          300: '#4a3e2f',
        },
        gold: {
          DEFAULT: '#d4a017',
          light: '#f0c040',
          dark: '#a07010',
        },
        crimson: {
          DEFAULT: '#8b1a1a',
          light: '#c0392b',
          dark: '#5a0f0f',
        },
        slate: {
          game: '#2c3e50',
        },
        rarity: {
          common: '#a0a0a0',
          uncommon: '#4a90d9',
          rare: '#f0c040',
          basic: '#6b6b6b',
        },
        type: {
          attack: '#c0392b',
          skill: '#2980b9',
          power: '#8e44ad',
          status: '#7f8c8d',
          curse: '#2c3e50',
        },
      },
      fontFamily: {
        serif: ['"Crimson Text"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
      },
      backgroundImage: {
        'parchment': "url('/images/parchment-bg.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config
