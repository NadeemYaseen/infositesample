// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
          colors: {
            'dark-bg': '#1a202c',   // A very dark, slightly blue charcoal
            'light-text': '#edf2f7', // A clean, soft white
            'accent': '#f6ad55',    // A warm, muted orange/gold for highlights
            'accent-light': '#fbd38d', // A lighter gold for the gradient
            'wave-color': '#2d3748',   // A lighter charcoal for the wave
          },
        },
      },
    plugins: [],
  }