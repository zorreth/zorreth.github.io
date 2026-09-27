// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://zorreth.com',
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Roboto Mono',
      cssVariable: '--font-mono',
      weights: ['400', '700'],
    },
  ],
  integrations: [sitemap(), partytown()],
});
