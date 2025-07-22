// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';
import partytown from '@astrojs/partytown'
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify(),
  integrations: [
          partytown({
              config: {
                forward: ["dataLayer.push"],
              },
          }),
      ],

});