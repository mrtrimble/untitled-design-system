import PopoverComponent from './base-disclosure-component';

export default class Accordion extends PopoverComponent {
  accordions;

  constructor(accordions: Element[]) {
    super(accordions, '.accordion-header');

    this.accordions = accordions;

    return;
  }
}

window.addEventListener('load', () => {
  const accordions = Array.from(
    document.querySelectorAll(':not(details).accordion')
  );

  if (accordions.length) {
    new Accordion(accordions);
  }
});
