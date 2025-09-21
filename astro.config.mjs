// astro.config.mjs
import { defineConfig } from 'astro/config';

// 1. Import the official Astro Tailwind integration
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // 2. Add the integration to the `integrations` array
  site: 'https://nadeemyaseen.github.io', // Your main GitHub Pages URL
  base: '/infositesample/',  
  integrations: [tailwind()]
});
