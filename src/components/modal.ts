import PopoverComponent from './primitives/base-popover-component';

export default class Modal extends PopoverComponent {
  component: HTMLElement | null;
  toggles: HTMLElement[] | null;

  constructor(component: HTMLElement) {
    super();
    this.component = component;
    this.toggles = this.getToggles();

    if (!this.component.hasAttribute('role')) this.component.setAttribute('role', 'dialog');

    if (this.toggles) {
      super.setToggles(this.toggles);
      super.setTarget(this.component);
      this.setListeners();
    }
  }

  getToggles(): HTMLElement[] | null {
    const toggles = Array.from(document.querySelectorAll('.modal-toggle')).filter((toggle) => {
      if (toggle instanceof HTMLElement) {
        if (this.component) {
          return toggle.dataset.target === this.component.id;
        }
      }
    });
    if (toggles) {
      return toggles as HTMLElement[];
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
    modals.forEach((modal) => new Modal(modal as HTMLElement));
  }
});
