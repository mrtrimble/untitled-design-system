// vite.config.ts

import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';
import * as lightningCss from 'lightningcss';

export default {
  plugins: [
    ViteSvgSpriteWrapper({
      icons: './src/icons/*.svg',
      outputDir: './public/',
    }),
  ],
  build: {
    cssMinify: 'lightningcss'
  },
};
