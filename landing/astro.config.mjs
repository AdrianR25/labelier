// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
  site: 'https://labelier.adrianr.dev',
  i18n: {
    defaultLocale: 'en', // keep in sync with utils.ts
    locales: ['en', 'es'],
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
        es: 'es-ES',
      },
    },
  }), purgecss()]
});