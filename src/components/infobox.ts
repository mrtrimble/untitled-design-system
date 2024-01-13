import DisclosureComponent from './primitives/base-disclosure-component';

export default class Test extends DisclosureComponent {
  toggle: HTMLElement | null;
  target: HTMLElement | null;
  element: HTMLElement | null;

  constructor(element: HTMLElement) {
    super();
    super.setCallback(this.handleCallback);
    this.element = element;
    this.toggle = this.getToggle();
    this.target = this.getTarget();

    if (this.toggle && this.target) {
      super.setTarget(this.target);
      super.setToggle(this.toggle);

      this.toggle.addEventListener('click', this.onClick.bind(this));
    }
  }

  getToggle(): HTMLElement | null {
    let toggle: HTMLElement | null = this.element ? this.element.querySelector('[data-toggle]') : null;

    if (toggle) {
      if (!toggle.hasAttribute('aria-controls')) toggle.setAttribute('aria-controls', `${toggle.getAttribute('data-target')}`);
    }

    return toggle;
  }

  getTarget(): HTMLElement | null {
    if (this.toggle instanceof HTMLElement) {
      return this.element ? this.element.querySelector(`#${this.toggle.dataset.target}`) : null;
    }

    return null;
  }

  handleCallback() {
    return console.log('callback called!');
  }

  onClick() {
    return this.toggle && super.onClick();
  }
}

window.addEventListener('load', () => {
  const tests = document.querySelectorAll('.disclosure');
  tests.forEach((test) => new Test(test as HTMLElement));
});
