import PopoverComponent from './base-popover-component';

export default class Modal extends PopoverComponent {
  component: Element | null;
  toggles: Element[] | null;

  constructor(component: Element) {
    super();
    this.component = component;
    this.toggles = this.getToggles();

    if (this.toggles) {
      super.setToggles(this.toggles);
      super.setTarget(this.component);
      this.setListeners();
    }
  }

  getToggles(): Element[] | null {
    const toggles = Array.from(
      document.querySelectorAll('.modal-toggle')
    ).filter((toggle) => {
      if (toggle instanceof HTMLElement) {
        if (this.component) {
          return toggle.dataset.target === this.component.id;
        }
      }
    });
    if (toggles) {
      return toggles;
    }

    return null;
  }

  setListeners() {
    if (this.toggles && this.component) {
      this.toggles.forEach((toggle) => {
        toggle.addEventListener('click', super.onClick.bind(this));
      });
    }
  }
}

window.addEventListener('load', () => {
  const modals = document.querySelectorAll('.modal');

  if (modals.length) {
    modals.forEach((modal) => new Modal(modal));
  }
});
