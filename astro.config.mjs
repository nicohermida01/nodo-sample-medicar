// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real production domain before deploying.
  site: 'https://dra-ejemplo.com',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), icon()],
});
