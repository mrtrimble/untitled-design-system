import PopoverComponent from './base-popover-component';

export default class Drawer extends PopoverComponent {
  constructor(identifier: string, toggles: Element[]) {
    super(identifier, toggles);
    super.setListeners();

    return;
  }
}

const toggles = Array.from(document.querySelectorAll('.drawer-toggle'));
if (toggles.length) {
  window.addEventListener('load', () => new Drawer('.drawer-toggle', toggles));
}
