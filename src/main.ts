import './styles/scss/style.scss';
import './styles/scss/theme.scss';

import './components/accordion';
import './components/drawer';
import './components/infobox';
import './components/modal';
import './components/tabs';
import './components/tooltip';

window.addEventListener('load', () => {
  if (document.body.classList.contains('no-js')) document.body.classList.remove('no-js');
});
