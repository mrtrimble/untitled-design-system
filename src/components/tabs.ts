interface Tab {
  parent: ParentNode | null;
  toggle: HTMLElement | null;
  panel: Element | null;
}

export default class Tabs {
  tabList: Element;
  toggles: Element[];
  panel: Element | null = null;
  current: Tab;

  constructor(tabList: Element) {
    this.tabList = tabList;
    this.toggles = Array.from(tabList.querySelectorAll('.tab'));
    this.current = this.getCurrentTab();

    this.setCurrentTab(this.toggles[0]);

    let panels: Element[];

    if (this.current.parent) {
      panels = Array.from(this.current.parent?.querySelectorAll('.tab-panel'));

      if (panels.length) {
        panels.forEach((panel) => {
          if (!panel.hasAttribute('role'))
            panel.setAttribute('role', 'tabpanel');
          if (!panel.hasAttribute('tabindex'))
            panel.setAttribute('tabindex', '0');
        });
      }
    }

    this.toggles.forEach((toggle) => {
      if (!toggle.hasAttribute('role')) toggle.setAttribute('role', 'tab');
      if (!toggle.hasAttribute('aria-selected'))
        toggle.setAttribute('aria-selected', 'false');
      if (!toggle.hasAttribute('tabindex'))
        toggle.setAttribute('tabindex', '-1');
      if (toggle.hasAttribute('data-target')) {
        toggle.setAttribute(
          'aria-controls',
          `${toggle.getAttribute('data-target')}`
        );
      }

      if (!this.tabList.hasAttribute('role'))
        this.tabList.setAttribute('role', 'tablist');

      if (toggle.hasAttribute('aria-controls')) {
        toggle.addEventListener('click', this.onClick.bind(this));
        toggle.addEventListener('keydown', this.onKeydown.bind(this));
      }
    });

    return;
  }

  getCurrentTab() {
    const parent: ParentNode | null = this.tabList.parentNode
      ? this.tabList.parentNode
      : null;
    let toggle: HTMLElement | null = null;
    let panel: Element | null = null;
    if (parent) {
      toggle = parent.querySelector('.tab.active');
      panel = parent.querySelector(`#${toggle?.getAttribute('aria-controls')}`);
    }

    return {
      parent,
      toggle,
      panel,
    };
  }

  clearCurrentTab() {
    if (this.current) {
      this.current.toggle?.classList.remove('active');
      this.current.toggle?.setAttribute('aria-selected', 'false');
      this.current.toggle?.setAttribute('tabindex', '-1');
      this.current.panel?.classList.remove('open');
    }

    return;
  }

  updateCurrentTab() {
    if (this.current) {
      this.current.toggle?.classList.add('active');
      this.current.toggle?.setAttribute('tabindex', '0');
      this.current.toggle?.setAttribute('aria-selected', 'true');
      this.current.toggle?.focus();
      this.current.panel?.classList.add('open');
    }

    return;
  }

  setCurrentTab(tab: Element | EventTarget | null) {
    this.clearCurrentTab();

    let selected: Tab = {
      toggle: null,
      parent: null,
      panel: null,
    };

    if (tab instanceof HTMLElement) {
      selected.toggle = tab;

      selected.parent = tab.parentNode?.parentNode
        ? tab.parentNode.parentNode
        : null;

      const targetId = selected.parent?.querySelector(
        `#${selected.toggle.getAttribute('aria-controls')}`
      );

      selected.panel = targetId ? targetId : null;
    }

    this.current = {
      toggle: selected.toggle,
      parent: selected.parent,
      panel: selected.panel,
    };

    this.updateCurrentTab();

    return;
  }

  setNextTab() {
    if (this.current.toggle) {
      let currentIndex = this.toggles.indexOf(this.current.toggle);
      let nextIndex = currentIndex + 1;

      if (nextIndex > this.toggles.length - 1) return;
      this.setCurrentTab(this.toggles[nextIndex]);
    }

    return;
  }

  setPreviousTab() {
    if (this.current.toggle) {
      let currentIndex = this.toggles.indexOf(this.current.toggle);
      let prevIndex = currentIndex - 1;

      if (prevIndex < 0) return;
      this.setCurrentTab(this.toggles[prevIndex]);
    }

    return;
  }

  onClick(event: Event) {
    return this.setCurrentTab(event.currentTarget);
  }

  onKeydown(event: Event) {
    if (event instanceof KeyboardEvent) {
      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault();
          this.setNextTab();
          break;

        case 'ArrowLeft':
          event.preventDefault();
          this.setPreviousTab();
          break;

        default:
          break;
      }
    }

    return;
  }
}

window.addEventListener('load', function () {
  const tablists = document.querySelectorAll('.tab-list');
  if (tablists.length) {
    tablists.forEach((tablist) => new Tabs(tablist));
  }
});
