import PopoverComponent from './primitaves/base-popover-component';

export default class Drawer extends PopoverComponent {
  component: HTMLElement | null;
  toggles: HTMLElement[] | null;

  constructor(component: HTMLElement) {
    super();
    this.component = component;
    this.toggles = this.getToggles();

    if (this.toggles) {
      super.setToggles(this.toggles);
      super.setTarget(this.component);
      this.setListeners();
    }
  }

  getToggles(): HTMLElement[] | null {
    let toggles = Array.from(document.querySelectorAll('.drawer-toggle')).filter((toggle) => {
      if (toggle instanceof HTMLElement) {
        if (this.component) {
          return toggle.dataset.target === this.component.id;
        }
      }
    });

    return toggles ? (toggles as HTMLElement[]) : null;
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
    drawers.forEach((drawer) => new Drawer(drawer as HTMLElement));
  }
});
