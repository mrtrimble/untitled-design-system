export default class Tooltip {
  anchor: HTMLElement;
  popover: HTMLElement | null;
  popoverParent: HTMLElement | null;

  constructor(anchor: HTMLElement) {
    this.anchor = anchor;
    this.popover = this.setPopover();
    this.popoverParent = null;

    if (this.anchor && this.popover) {
      if (!this.popover.hasAttribute('role')) this.popover.setAttribute('role', 'tooltip');
      if (!this.anchor.hasAttribute('tabindex')) this.anchor.tabIndex = 0;

      this.popover.hasAttribute('popover') ? this.handlePopover() : this.handleTarget();
    }
  }

  handlePopover() {
    if (!this.anchor.hasAttribute('aria-describedby')) this.anchor.setAttribute('aria-describedby', `${this.anchor.getAttribute('popovertarget')}`);
    this.setPopoverListeners();

    return;
  }

  handleTarget() {
    if (this.popover && this.popover.parentNode) {
      this.popoverParent = this.popover.parentNode ? (this.popover.parentNode as HTMLElement) : null;
    }

    this.setTargetListeners();
    return;
  }

  setPopover() {
    let popover: HTMLElement | null = null;

    if (this.anchor.hasAttribute('popovertarget')) {
      popover = document.getElementById(`${this.anchor.getAttribute('popovertarget')}`);
    }

    if (this.anchor.hasAttribute('data-target')) {
      popover = document.getElementById(`${this.anchor.dataset.target}`);
    }

    return popover;
  }

  setPopoverListeners() {
    ['mouseover', 'focus'].forEach((event) => {
      this.anchor.addEventListener(event, () => {
        if (this.popover) {
          this.popover.showPopover();
        }
      });
    });
    ['mouseout', 'blur'].forEach((event) => {
      this.anchor.addEventListener(event, () => {
        if (this.popover) {
          // TODO: Implement a timeout
          this.popover.hidePopover();
        }
      });
    });
  }

  setTargetListeners() {
    ['mouseover', 'focus'].forEach((event) => {
      this.anchor.addEventListener(event, () => {
        if (this.popover && this.popoverParent) {
          this.popover.classList.add('open');
          this.anchor.append(this.popover);
        }
      });
    });
    ['mouseout', 'blur'].forEach((event) => {
      this.anchor.addEventListener(event, () => {
        if (this.popover && this.popoverParent) {
          // TODO: Implement a timeout
          this.popover.classList.remove('open');
          this.popoverParent.append(this.popover);
        }
      });
    });
  }
}

window.addEventListener('load', () => {
  const tooltips = document.querySelectorAll('.tooltip-toggle');

  if (tooltips.length) {
    tooltips.forEach((tooltip) => new Tooltip(tooltip as HTMLElement));
  }
});
