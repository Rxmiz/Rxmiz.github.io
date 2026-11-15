import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages as a user site (repository "Rxmiz.github.io").
// If it is served from a project repository instead, add: base: '/<repo-name>'
export default defineConfig({
  site: 'https://rxmiz.github.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
