import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://stacklunch.africa',
  output: 'static',
  integrations: [mdx()],
});
