export default class DisclosureComponent {
  target: HTMLElement | null;
  toggle: HTMLElement | null;
  callback: Function | null;

  constructor() {
    this.target = null;
    this.toggle = null;
    this.callback = null;
  }

  setTarget(target: HTMLElement) {
    return (this.target = target);
  }

  setToggle(toggle: HTMLElement) {
    toggle.setAttribute('aria-expanded', `${toggle.classList.contains('open')}`);
    return (this.toggle = toggle);
  }

  setCallback(callback: Function) {
    return (this.callback = callback ? callback : null);
  }

  onClick() {
    if (this.toggle && this.target) {
      this.toggle.classList.toggle('open');
      this.toggle.setAttribute('aria-expanded', `${this.toggle.classList.contains('open')}`);
      this.target.classList.toggle('active');
    }

    if (this.callback) this.callback();
  }
}
