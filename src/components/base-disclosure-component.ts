export default class DisclosureComponent {
  components;
  toggle;

  constructor(components: Element[], toggle: String) {
    this.components = components;
    this.toggle = toggle;

    if (this.components.length) {
      this.components.forEach(function (component) {
        if (component instanceof HTMLDetailsElement) return;

        const toggleElement = component.querySelector(`${toggle}`);

        if (toggleElement) {
          if (!toggleElement.hasAttribute('tab-index')) toggleElement.setAttribute('tabindex', '0');

          toggleElement.hasAttribute('aria-expanded')
            ? toggleElement.setAttribute('aria-expanded', `${component.classList.contains('open')}`)
            : toggleElement.setAttribute('aria-expanded', 'false');

          ['click', 'keypress'].forEach((listener) => {
            toggleElement.addEventListener(listener, (event: Event | KeyboardEvent) => {
              if (event instanceof KeyboardEvent) {
                if (event.code === 'Space' || event.code === 'Enter') {
                  event.preventDefault();
                  component.classList.toggle('open');
                }
              } else {
                component.classList.toggle('open');
              }

              toggleElement.setAttribute('aria-expanded', `${component.classList.contains('open')}`);
            });
          });
        }
      });
    }

    return;
  }
}
