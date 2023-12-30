// vite.config.ts

import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

export default {
  build: {
    cssMinify: 'lightningcss',
  },
};
