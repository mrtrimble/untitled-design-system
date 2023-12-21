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

          toggleElement.addEventListener('click', () => {
            component.classList.toggle('open');
          });
        }
      });
    }

    return;
  }
}