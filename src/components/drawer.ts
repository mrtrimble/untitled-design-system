import BaseDisclosureComponent from './base-disclosure-component';

class Drawer extends BaseDisclosureComponent {
  constructor(identifier: string, toggles: Element[]) {
    super(identifier, toggles);
    super.setListeners();
  }
}

const toggles = Array.from(document.querySelectorAll('.drawer-toggle'));
if (toggles.length) {
  window.addEventListener('load', () => new Drawer('.drawer-toggle', toggles));
}
