import DisclosureComponent from './base-disclosure-component';

export default class Accordion extends DisclosureComponent {
  accordions;

  constructor(accordions: Element[]) {
    super(accordions, '.accordion-header');
    this.accordions = accordions;

    return;
  }
}

const accordions = Array.from(document.querySelectorAll('.accordion'));
if (accordions.length) {
  window.addEventListener('load', () => new Accordion(accordions));
}
