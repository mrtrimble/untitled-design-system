import DisclosureComponent from './base-disclosure-component';
export default class Accordion extends DisclosureComponent {
  component: Element | null;

  constructor(component: Element | null) {
    super();

    this.component = component;
    this.target = this.getTarget();
    this.toggle = this.getToggle();

    if (this.toggle && this.target) {
      this.setAttributes();
      super.setTarget(this.target);
      super.setToggle(this.toggle);
      super.setCallback(this.toggleParent);

      this.toggle.addEventListener('click', this.onClick.bind(this));
    }
  }

  getToggle(): Element | null {
    let toggle = this.component
      ? this.component.querySelector('.accordion-header')
      : null;

    if (toggle) {
      if (toggle.id)
        this.target?.setAttribute('aria-labelledby', `${toggle.id}`);

      if (!toggle.hasAttribute('aria-controls'))
        toggle.setAttribute(
          'aria-controls',
          `${toggle.getAttribute('data-target')}`
        );

      if (!toggle.hasAttribute('aria-expanded'))
        toggle.setAttribute('aria-expanded', 'false');

      if (
        !toggle.hasAttribute('aria-controls') &&
        this.target?.hasAttribute('id')
      )
        toggle.setAttribute(
          'aria-controls',
          `${this.target && this.target.id}`
        );
    }

    return toggle;
  }

  getTarget(): Element | null {
    let target = this.component
      ? this.component.querySelector('.accordion-content')
      : null;

    return target;
  }

  setAttributes() {
    if (this.toggle) {
      if (this.toggle.id)
        this.target?.setAttribute('aria-labelledby', `${this.toggle.id}`);

      if (!this.toggle.hasAttribute('role'))
        this.toggle.setAttribute('role', 'button');

      if (!this.toggle.hasAttribute('aria-controls'))
        this.toggle.setAttribute(
          'aria-controls',
          `${this.toggle.getAttribute('data-target')}`
        );

      if (!this.toggle.hasAttribute('aria-expanded'))
        this.toggle.setAttribute('aria-expanded', 'false');

      if (
        !this.toggle.hasAttribute('aria-controls') &&
        this.target?.hasAttribute('id')
      )
        this.toggle.setAttribute(
          'aria-controls',
          `${this.target && this.target.id}`
        );
    }

    if (this.target) {
      if (this.target.id)
        this.toggle?.setAttribute('aria-controls', `${this.target.id}`);
      if (!this.target.hasAttribute('role'))
        this.target?.setAttribute('role', 'region');
    }
  }

  toggleParent() {
    return this.component?.classList.toggle('open');
  }

  onClick() {
    return this.toggle && super.onClick();
  }
}

window.addEventListener('load', () => {
  const accordions = Array.from(
    document.querySelectorAll(':not(details).accordion')
  );

  if (accordions.length) {
    accordions.forEach((accordion) => new Accordion(accordion));
  }
});
