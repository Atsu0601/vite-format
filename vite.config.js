// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: 'assets', // この行を変更
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'index': resolve(__dirname, 'src/pages/index.html'),
        'about': resolve(__dirname, 'src/pages/about/index.html')
      },
      output: {
        entryFileNames: `assets/js/[name].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
        chunkFileNames: `assets/js/[name].js`,
      }
    },
  },
});
