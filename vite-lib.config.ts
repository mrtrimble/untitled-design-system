// vite-lib.config.ts
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

export default {
  plugins: [
    ViteSvgSpriteWrapper({
      icons: './src/icons/*.svg',
      outputDir: './public/',
    }),
    ViteMinifyPlugin({}),
  ],
  build: {
    cssMinify: 'lightningcss',
    lib: {
      entry: {
        index: './src/main.ts',
      },
      name: 'UntitledDesignSystem',
      fileName: 'untitled-design-system',
    },
    outDir: './lib/',
  },
};
