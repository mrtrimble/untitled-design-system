export default class PopoverComponent {
  target: Element | null;
  toggles: Element[] | null;
  callback: Function | null;

  constructor() {
    this.target = null;
    this.toggles = null;
    this.callback = null;
  }

  setTarget(target: Element) {
    return (this.target = target);
  }

  setToggles(toggles: Element[]) {
    return (this.toggles = toggles);
  }

  setCallback(callback: Function) {
    return (this.callback = callback ? callback : null);
  }

  onClick() {
    if (this.target instanceof HTMLDialogElement) {
      this.target.open ? this.target.close() : this.target.showModal();
    }

    this.target?.classList.toggle('open');

    if (this.callback) this.callback();
  }
}
