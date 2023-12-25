// vite.config.ts

import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

export default {
  // plugins: [
  //   ViteSvgSpriteWrapper({
  //     icons: './src/icons/*.svg',
  //     outputDir: './public/icons'
  //   }),
  // ],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
    },
  },
  build: {
    cssMinify: 'lightningcss',
  },
};
