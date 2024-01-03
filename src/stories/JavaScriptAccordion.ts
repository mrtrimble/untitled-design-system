import '../styles/scss/style.scss';
import Accordion from '../components/accordion';

export interface AccordionProps {
  header: string;
  content: string;
}

export const createAccordion = ({ header, content }: AccordionProps) => {
  const accordion = Object.assign(document.createElement('div'), {
    classList: ['accordion'].join(' '),
  });

  const accordionHeader = Object.assign(document.createElement('div'), {
    classList: ['accordion-header'].join(' '),
    innerText: header,
    role: 'button',
    id: 'accordion-header',
    ariaExpanded: false,
    controls: 'accordion-content',
  });

  const accordionContent = Object.assign(document.createElement('div'), {
    classList: ['accordion-content'].join(' '),
    innerText: content,
    id: 'accordion-content',
    ariaLabelledBy: 'accordion-header',
  });

  accordion.append(accordionHeader);
  accordion.append(accordionContent);

  new Accordion(accordion);

  return accordion;
};
