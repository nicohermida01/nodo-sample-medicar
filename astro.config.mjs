// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // Production URL: used by the sitemap, canonical and Open Graph tags.
  site: 'https://nodo-sample-medicar.vercel.app',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), icon()],
});
