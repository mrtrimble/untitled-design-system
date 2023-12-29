import BaseTetheredComponent from './primitaves/base-tethered-component';

export default class Tooltip extends BaseTetheredComponent {
  constructor(anchor: HTMLElement, popover: HTMLElement) {
    super(anchor, popover);
  }
}

const anchor = document.querySelector('.tooltip-toggle');
const popover = document.querySelector('#popover-tooltip');

new Tooltip(anchor as HTMLElement, popover as HTMLElement);
