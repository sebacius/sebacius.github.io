/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        bbs: {
          bg: '#0c0c18',
          surface: '#12121f',
          border: '#3b82f6',
          text: '#e2e8f0',
          muted: '#64748b',
          cyan: '#22d3ee',
          yellow: '#facc15',
          green: '#4ade80',
          highlightText: '#0c0c18',
        },
      },
    },
  },
};
