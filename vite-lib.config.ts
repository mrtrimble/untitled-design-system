// vite-lib.config.ts
import { resolve } from 'path';
import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

export default {
  plugins: [
    ViteSvgSpriteWrapper({
      icons: './src/icons/*.svg',
      outputDir: './public/',
    }),
  ],
  build: {
    cssMinify: 'lightningcss',
    lib: {
      entry: {
        index: './src/main.ts',
      },
      name: 'DesignSystem',
      fileName: 'design-system',
    },
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        theme: resolve(__dirname, 'src/styles/scss/theme.scss'),
        accordion: resolve(__dirname, 'src/components/accordion.ts')
      },
      output: {
        inlineDynamicImports: false,
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
    outDir: './lib/',
  },
};
