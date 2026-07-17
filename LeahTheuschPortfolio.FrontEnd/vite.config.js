import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
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