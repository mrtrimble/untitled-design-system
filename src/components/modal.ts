import PopoverComponent from './base-popover-component';

export default class Modal extends PopoverComponent {
  constructor(identifier: string, toggles: Element[]) {
    super(identifier, toggles);
    super.setListeners();

    return;
  }
}

window.addEventListener('load', () => {
  const toggles = Array.from(document.querySelectorAll('.modal-toggle'));
  if (toggles.length) {
    new Modal('.modal-toggle', toggles);
  }
});
