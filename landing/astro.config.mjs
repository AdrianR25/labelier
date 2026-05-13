// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
  site: 'https://labelier.adrianr.dev',
  integrations: [sitemap(), purgecss()]
});