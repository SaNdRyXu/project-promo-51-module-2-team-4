import { defineConfig } from "vite";
// plugins
import injectHTML from "vite-plugin-html-inject";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import concat from '@vituum/vite-plugin-concat';

export default defineConfig({
  base: "/",
  root: "./",
  // publicDir: "../public",  // <-- comentat, ja que public està a dins el projecte
  build: {
    minify: "esbuild",
    outDir: "../docs",
    sourcemap: "inline",
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html',
      output: {
        sourcemap: true,
        entryFileNames: ({name}) => {
          if( name === 'main' ) {
            return 'js/main.js';
          }
          return "[name].js";
        },
      },
    },
  },
  server: {
    open: "../index.html",
    watch: {
      usePolling: true
    }
  },
  plugins: [
    injectHTML(),
    ViteImageOptimizer({}),
    concat({ input: ['main.js'] }),
  ],
});

