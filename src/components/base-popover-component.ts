export default class PopoverComponent {
  identifier;
  toggles;

  constructor(identifier: string, toggles: Element[]) {
    this.identifier = identifier;
    this.toggles = toggles;

    return;
  }

  setListeners() {
    if (this.toggles) {
      this.toggles.map((toggle) => {
        toggle.addEventListener('click', () => {
          if (toggle.hasAttribute('popovertarget')) return;

          const target: string | boolean = toggle.hasAttribute('data-target') ? `${toggle.getAttribute('data-target')}` : false;

          if (target) {
            const targetElement = document.getElementById(target);

            if (targetElement) {
              if (targetElement instanceof HTMLDialogElement) {
                targetElement.open ? targetElement.close() : targetElement.showModal();
              }
              targetElement.classList.toggle('open');
            }
          }

          return;
        });
      });
    }
  }
}
