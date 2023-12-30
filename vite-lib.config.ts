// vite.config.ts

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
      entry: './src/main.ts',
      name: 'DesignSystem',
      fileName: 'design-system',
    },
    outDir: './lib/',
  },
};
