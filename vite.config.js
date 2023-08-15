// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  root: 'src',
  publicDir: 'assets', // この行を変更
  plugins: [
    copy({
      targets: [
        { src: 'src/assets/*', dest: 'dist/assets' }
      ]
    })
  ],
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
        'index': resolve(__dirname, 'src/index.html'),
        'about': resolve(__dirname, 'src/about/index.html')
      },
      output: {
        entryFileNames: `assets/js/[name].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
        chunkFileNames: `assets/js/[name].js`,
      }
    },
  },
});
