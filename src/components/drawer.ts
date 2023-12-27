import PopoverComponent from './base-popover-component';

export default class Drawer extends PopoverComponent {
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
      document.querySelectorAll('.drawer-toggle')
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
  const drawers = document.querySelectorAll('.drawer');

  if (drawers.length) {
    drawers.forEach((drawer) => new Drawer(drawer));
  }
});
