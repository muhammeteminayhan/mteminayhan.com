// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mteminayhan.com',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', tr: 'tr-TR' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
