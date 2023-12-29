export default class BaseTetheredComponent {
  anchor: HTMLElement;
  popover: HTMLElement;
  anchorDimensions: {
    x: number;
    y: number;
  } | null;
  popoverDimensions: object | null;
  resizeObserver: void | null;

  constructor(anchor: HTMLElement, popover: HTMLElement) {
    this.anchor = anchor;
    this.popover = popover;
    this.anchorDimensions = {
      x: 0,
      y: 0,
    };
    this.popoverDimensions = {};
    this.resizeObserver = null;

    if (this.anchor && this.popover) {
      this.popoverDimensions = this.getPopoverDimensions();
      this.anchorDimensions = this.getAnchorDimensions();

      if (this.popover.hasAttribute('popover')) {
        this.popover.addEventListener('beforetoggle', (event: Event) => {
          if (event instanceof ToggleEvent) {
            if (event.newState === 'open') {
              this.getPopoverDimensions();
              this.updatePopoverLocation();
              window.addEventListener('resize', this.onWindowResize.bind(this));
            } else {
              window.removeEventListener('resize', this.onWindowResize);
            }

            this.popover.classList.toggle('open');
            this.anchor.classList.toggle('active');
            this.anchor.setAttribute('aria-selected', `${this.popover.classList.contains('open')}`);
          }
        });
      }
    }
  }

  getPopoverDimensions() {
    const popover = document.getElementById(this.popover.id);
    const popoverDimensions = popover?.getBoundingClientRect();

    if (popoverDimensions) {
      this.popover.style.setProperty('--_height', `${popoverDimensions.height}px`);
    }

    return popover ? this.popover.getBoundingClientRect() : null;
  }

  getAnchorDimensions() {
    const anchor = document.getElementById(this.anchor.id);
    return anchor ? anchor.getBoundingClientRect() : null;
  }

  updatePopoverLocation() {
    if (this.anchorDimensions) {
      this.popover.style.setProperty('--_translate-x', `${this.anchorDimensions.x}px`);
      this.popover.style.setProperty('--_translate-y', `${this.anchorDimensions.y}px`);
    }
  }

  onWindowResize() {
    this.anchorDimensions = this.getAnchorDimensions();
    this.updatePopoverLocation();
  }
}
