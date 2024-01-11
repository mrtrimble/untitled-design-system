// vite.config.ts

import { resolve } from 'path';
import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import * as lightningCss from 'lightningcss';

export default {
  plugins: [
    ViteSvgSpriteWrapper({
      icons: './src/icons/*.svg',
      outputDir: './public/',
    }),
    ViteMinifyPlugin({}),
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        theme: resolve(__dirname, 'src/styles/scss/theme.scss'),
        // accordion: resolve(__dirname, 'src/components/accordion.ts'),
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
    esbuild: {
      minifyIdentifiers: false,
      keepNames: true,
    },
    cssMinify: 'lightningcss',
  },
};
