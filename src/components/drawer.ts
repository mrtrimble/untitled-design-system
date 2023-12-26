import PopoverComponent from './base-popover-component';

export default class Drawer extends PopoverComponent {
  constructor(identifier: string, toggles: Element[]) {
    super(identifier, toggles);
    super.setListeners();

    return;
  }
}

window.addEventListener('load', () => {
  const toggles = Array.from(document.querySelectorAll('.drawer-toggle'));
  if (toggles.length) {
    new Drawer('.drawer-toggle', toggles);
  }
});
