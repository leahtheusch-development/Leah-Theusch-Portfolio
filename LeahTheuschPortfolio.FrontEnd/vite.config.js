import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // lets `@import 'bootstrap/scss/...'` resolve into node_modules
        loadPaths: [resolve(__dirname, 'node_modules')],
        // Bootstrap's own SCSS source (not ours) uses Sass patterns that are
        // deprecated on this Sass version — nothing we can fix in node_modules.
        quietDeps: true,
        // _bootstrap.scss's 3 @import lines are a required part of Bootstrap's
        // customization pattern (see that file's comments) — silenced
        // deliberately, not because @import is fine to reach for elsewhere.
        silenceDeprecations: ['import'],
      },
    },
  },
  build: {
    outDir: resolve(__dirname, '../LeahTheuschPortfolio.Web/wwwroot/dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'Scripts/main.ts'),
      output: {
        entryFileNames: 'main.js',
        assetFileNames: (asset) => (asset.name?.endsWith('.css') ? 'main.css' : 'assets/[name][extname]'),
      },
    },
  },
});